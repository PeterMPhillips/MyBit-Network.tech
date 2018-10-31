pragma solidity 0.4.24;

import "../tokens/erc20/BurnableToken.sol";
import "../math/SafeMath.sol";

/**
 * @title Proposal voting
 * @notice
 * Anyone can create a proposal. An MYB holder can lock their tokens to become
 * a voter. Voters may approve or decline proposals. Vote weight increases as
 * tokens are locked for longer periods. A proposal closes after a configurable
 * vote duration. It passes if a quorum of total MYB supply voted and the
 * approval ratio of weighted votes reaches the required threshold.
 *
 * Provide the address of the MYB token contract and vote duration. Voting for
 * each proposal will be open for the specified duration.
 */
contract TimedVote {
  // -------
  // Library

  using SafeMath for uint256;

  // --------
  // Constant

  address constant NULL_ADDRESS = address(0);   // Null address
  uint256 constant TIER_2_AGE = 180 days;       // Tier 2 commitment age
  uint256 constant TIER_3_AGE = 365 days;       // Tier 3 commitment age
  uint8 constant TIER_1_MULTIPLIER = 100;       // Tier 1 multiplier-
  uint8 constant TIER_2_MULTIPLIER = 150;       // Tier 2 multiplier
  uint8 constant TIER_3_MULTIPLIER = 200;       // Tier 3 multiplier

  // ----
  // Type

  // Commitment of MYB tokens to voting
  struct Commitment {
    uint256 value;                              // MYB amount
    uint256 time;                               // Commit instant
  }

  // Proposal for the MYB community
  struct Proposal {
    uint256 start;                              // Create instant
    uint256 voted;                              // Voting MYB amount
    uint256 approval;                           // Weighted approval amount
    uint256 dissent;                            // Weighted dissent amount
    mapping(address => bool) voters;            // Voting accounts
  }

  // -----
  // State

  BurnableToken token;                          // MYB token contract
  uint256 voteDuration;                         // Vote duration
  mapping(address => Commitment) commitments;   // Active commitments
  mapping(bytes32 => Proposal) proposals;       // Created proposals

  // -----------
  // Constructor

  /**
   * @param _tokenAddress - MYB token contract address.
   * @param _voteDuration - Vote duration. Voting period of each proposal.
   *     Must be positive.
   */
  constructor(address _tokenAddress, uint256 _voteDuration)
  public
  onlyValid(_tokenAddress)
  onlyPositive(_voteDuration) {
    token = BurnableToken(_tokenAddress);
    voteDuration = _voteDuration;
  }

  // ---------
  // Interface

  /**
   * Check account committed
   * @param _account - Account to check.
   * @return committed - Whether account has an active commitment.
   */
  function accountCommitted(address _account)
  public
  view
  returns (bool committed) {
    return (commitments[_account].value > 0);
  }

  /**
   * Approve proposal
   * @notice
   * Approves proposal with all of your committed tokens. Your vote is weighted
   * differently depending on how long your tokens have been committed.
   * Requires an unlocked commitment and an open proposal you haven't voted on.
   * Emits Approve on success.
   * @param _proposalID - Identifier of proposal to approve.
   */
  function approve(bytes32 _proposalID)
  external
  onlyCommitted(msg.sender)
  onlyUnlocked(msg.sender)
  onlyExtant(_proposalID)
  onlyOpen(_proposalID)
  onlyOneVote(_proposalID, msg.sender) {
    Proposal storage proposal = proposals[_proposalID];
    proposal.voters[msg.sender] = true;
    uint256 value = commitments[msg.sender].value;
    proposal.voted = proposal.voted.add(value);
    uint8 multiplier = multiplierOf(msg.sender);
    uint256 vote = weightVote(commitments[msg.sender].value, multiplier);
    proposal.approval = proposal.approval.add(vote);
    emit Approve(_proposalID, msg.sender, vote);
  }

  /**
   * Commit MYB to voting
   * @notice
   * Commits specified amount of your MYB to voting. Approve this contract with
   * the token contract for the desired amount before calling. Fails if you
   * already have an active commitment. Emits Commit on success.
   * @param _value - MYB amount to commit.
   */
  function commit(uint256 _value)
  external
  onlyUncommitted(msg.sender) {
    require(_value > 0, "Nonzero value required");
    commitments[msg.sender] = Commitment(_value, time());
    bool transferred = token.transferFrom(msg.sender, this, _value);
    require(transferred, "Transfer failed");
    emit Commit(msg.sender, _value);
  }

  /**
   * Get account commitment amount
   * @param _account - Account to get commitment amount of.
   * @return value - MYB amount currently committed by the account.
   */
  function commitmentOf(address _account)
  external
  view
  returns (uint256 value) {
    return commitments[_account].value;
  }

  /**
   * Get commitment multiplier
   * @notice
   * A commitment multiplier changes as the commitment advances tiers.
   * Fails if you have no active commitment.
   * @param _account - Account owning commitment to get the multiplier of.
   * @return multiplier - Current commitment multiplier.
   */
  function multiplierOf(address _account)
  public
  view
  onlyCommitted(msg.sender)
  returns (uint8 multiplier) {
    if (commitmentTier3(_account)) return TIER_3_MULTIPLIER;
    else if (commitmentTier2(_account)) return TIER_2_MULTIPLIER;
    else return TIER_1_MULTIPLIER;
  }

  /**
   * Check proposal extant
   * @param _proposalID - Proposal identifier to check.
   * @return extant - Whether proposal with identifier exists.
   */
  function proposalExtant(bytes32 _proposalID)
  public
  view
  returns (bool extant) {
    return (proposals[_proposalID].start > 0);
  }

  /**
   * Create proposal
   * @notice
   * Creates a new proposal with the specified identifier. Fails if a proposal
   * with the same identifier already exists. Emits Propose on success.
   * @param _proposalID - Identifier of new proposal.
   */
  function propose(bytes32 _proposalID)
  external
  onlyNew(_proposalID) {
    proposals[_proposalID] = Proposal(time(), 0, 0, 0);
    emit Propose(msg.sender, _proposalID);
  }

  /**
   * Withdraw committed MYB
   * @notice
   * Withdraws all of your committed MYB to the original address. Fails if you
   * have no active commitment. Fails if your commitment is locked. Emits
   * Withdraw on success.
   */
  function withdraw()
  external
  onlyCommitted(msg.sender)
  onlyUnlocked(msg.sender) {
    uint256 _value = commitments[msg.sender].value;
    delete commitments[msg.sender];
    bool transferred = token.transfer(msg.sender, _value);
    require(transferred, "Transfer failed");
    emit Withdraw(msg.sender, _value);
  }

  // --------
  // Internal

  /**
   * Check address null
   * @param _address - Address to check.
   * @return null_ - Whether address is the null address.
   */
  function addressNull(address _address)
  internal
  pure
  returns (bool null_) {
    return (_address == NULL_ADDRESS);
  }

  /**
   * Get commitment age
   * @dev
   * Assumes active commitment.
   * @param _account - Account owning commitment to get age of.
   * @return age - Commitment age.
   */
  function commitmentAge(address _account)
  internal
  view
  returns (uint256 age) {
    return time().sub(commitments[_account].time);
  }

  /**
   * Check commitment locked
   * @notice
   * A commitment is locked until vote duration has elapsed.
   * @dev
   * Assumes active commitment.
   * @param _account - Account owning commitment to check.
   * @return locked - Whether commitment is locked.
   */
  function commitmentLocked(address _account)
  internal
  view
  returns (bool locked) {
    uint256 age = commitmentAge(_account);
    return (age <= voteDuration);
  }

  /**
   * Check commitment tier 2
   * @notice
   * A commitment becomes tier 2 after TIER_2_AGE has elapsed.
   * @dev
   * Assumes active commitment. Assumes commitment is not a higher tier.
   * @param _account - Account owning commitment to check.
   * @return tier2 - Whether commitment is tier 2.
   */
  function commitmentTier2(address _account)
  internal
  view
  returns (bool tier2) {
    uint256 age = commitmentAge(_account);
    return (age > TIER_2_AGE);
  }

  /**
   * Check commitment tier 3
   * @notice
   * A commitment becomes tier 3 after TIER_3_AGE has elapsed.
   * @dev
   * Assumes active commitment. Assumes commitment is not a higher tier.
   * @param _account - Account owning commitment to check.
   * @return tier3 - Whether commitment is tier 3.
   */
  function commitmentTier3(address _account)
  internal
  view
  returns (bool tier3) {
    uint256 age = commitmentAge(_account);
    return (age > TIER_3_AGE);
  }

  /**
   * Check account has voted
   * @notice
   * Checks whether account has voted on a proposal.
   * @dev
   * Assumes extant proposal.
   * @param _account - Account to check.
   * @param _proposalID - Identifier of proposal to check.
   * @return voted - Whether account has voted on the proposal.
   */
  function hasVoted(address _account, bytes32 _proposalID)
  internal
  view
  returns (bool voted) {
    return proposals[_proposalID].voters[_account];
  }

  /**
   * Get proposal age
   * @dev
   * Assumes extant proposal.
   * @param _proposalID - Identifier of proposal to get age of.
   * @return age - Proposal age.
   */
  function proposalAge(bytes32 _proposalID)
  internal
  view
  returns (uint256 age) {
    return time().sub(proposals[_proposalID].start);
  }

  /**
   * Check proposal open
   * @notice
   * A proposal is open for voting until vote duration has elapsed.
   * @dev
   * Assumes extant proposal.
   * @param _proposalID - Identifier of proposal to check.
   * @return open - Whether proposal is open.
   */
  function proposalOpen(bytes32 _proposalID)
  internal
  view
  returns (bool open) {
    uint256 age = proposalAge(_proposalID);
    return (age <= voteDuration);
  }

  /**
   * Get current time
   * @dev
   * Abstracted interface to the current time. Enables overriding in tests.
   * @return instant - Current instant.
   */
  function time()
  internal
  view
  returns (uint256 instant) {
    return now;
  }

  /**
   * Weight vote
   * @param _value - Token amount applied.
   * @param _multiplier - Weighting multiplier.
   * @return vote - Weighted vote amount.
   */
  function weightVote(uint256 _value, uint8 _multiplier)
  internal
  pure
  returns (uint256 vote) {
    return _value.mul(_multiplier).div(100);
  }

  // --------
  // Modifier

  /**
   * Require proposal closed
   * @dev
   * Throws if proposal is open. Assumes extant proposal.
   * @param _proposalID - Identifier of proposal that must be closed.
   */
  modifier onlyClosed(bytes32 _proposalID) {
    require(
      !proposalOpen(_proposalID),
      "Closed proposal required"
    );
    _;
  }

  /**
   * Require account committed
   * @dev
   * Throws if account does not have a commitment.
   * @param _account - Account that must be committed.
   */
  modifier onlyCommitted(address _account) {
    require(
      accountCommitted(_account),
      "Commitment required"
    );
    _;
  }

  /**
   * Require proposal extant
   * @dev
   * Throws if proposal does not exist.
   * @param _proposalID - Identifier for which a proposal must exist.
   */
  modifier onlyExtant(bytes32 _proposalID) {
    require(
      proposalExtant(_proposalID),
      "Proposal not found"
    );
    _;
  }

  /**
   * Require proposal ID new
   * @dev
   * Throws if identifier refers to an extant proposal.
   * @param _proposalID - Proposal identifier that must be new.
   */
  modifier onlyNew(bytes32 _proposalID) {
    require(
      !proposalExtant(_proposalID),
      "Proposal exists"
    );
    _;
  }

  /**
   * Require maximum 1 vote
   * @dev
   * Throws if account has already voted on the proposal.
   * Assumes extant proposal.
   * @param _proposalID - Identifier of proposal to check.
   * @param _account - Account to check.
   */
  modifier onlyOneVote(bytes32 _proposalID, address _account) {
    require(
      !hasVoted(_account, _proposalID),
      "Already voted"
    );
    _;
  }

  /**
   * Require proposal open
   * @dev
   * Throws if proposal is closed. Assumes extant proposal.
   * @param _proposalID - Identifier of proposal that must be open.
   */
  modifier onlyOpen(bytes32 _proposalID) {
    require(
      proposalOpen(_proposalID),
      "Open proposal required"
    );
    _;
  }

  /**
   * Require number positive
   * @dev
   * Throws if number is not positive.
   * @param _number - Number that must be positive.
   */
  modifier onlyPositive(uint256 _number) {
    require(
      _number > 0,
      "Positive number required"
    );
    _;
  }

  /**
   * Require account uncommitted
   * @dev
   * Throws if account has active commitment.
   * @param _account - Account that must be uncommitted.
   */
  modifier onlyUncommitted(address _account) {
    require(
      !accountCommitted(_account),
      "Commitment disallows"
    );
    _;
  }

  /**
   * Require commitment unlocked
   * @dev
   * Throws if commitment is locked. Assumes active commitment.
   * @param _account - Account owning commitment that must be unlocked.
   */
  modifier onlyUnlocked(address _account) {
    require(
      !commitmentLocked(_account),
      "Unlocked commitment required"
    );
    _;
  }

  /**
   * Require address valid
   * @dev
   * Throws if address is the null address.
   * @param _address - Address that must be valid.
   */
  modifier onlyValid(address _address) {
    require(
      !addressNull(_address),
      "Valid address required"
    );
    _;
  }

  // -----
  // Event

  event Approve(
    bytes32 indexed proposalID,
    address indexed account,
    uint256 vote
  );

  /** MYB committed to voting */
  event Commit(
    address indexed account,                    // Committing account
    uint256 value                               // MYB amount committed
  );

  /** Proposal created */
  event Propose(
    address indexed proposer,
    bytes32 proposalID
  );

  /** Commitment withdrawn */
  event Withdraw(
    address indexed account,
    uint256 value
  );
}
