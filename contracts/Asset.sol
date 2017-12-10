pragma solidity ^0.4.18;
import './SafeMath.sol';
import './MyBitHub.sol'; 

// TODO: what happens when someone suicides Ether into a funding period?
// TODO: WHen calculating percentages, sometimes Solidity rounds down which may leave some Ether in the contract
// TODO: When period fails, trigger MYBitHub to delete storage and suicide contract. 
contract Asset {
using SafeMath for *;

  MyBitHub public myBitHub;

  // Created by myBit, holds/distributes Ether for Project
  // ------------Project Information--------------
  address public projectCreator;    // Address that initiated the project 
  bytes32 public storageHash;   // Where the title and description + images are stored. (IPFS, Swarm, BigChainDB)
  uint256 public deadline;        // When the funding period is over 
  uint256 public creationDate;    // Maybe just index this in a log to save gas? 
  uint256 public id;             // Location in MyBitHub assets[type] mapping => list storage

  uint256 public amountToBeRaised;

// -----------Beneficiary Addresses----------------------
  address public myBitFoundation = address(0);      // mybit foundation address
  address public assetInstaller;

//------------Beneficiary amounts---------------
  uint256 public myBitFoundationPercentage = 1;
  uint256 public lockedTokensPercentage = 2;
  uint256 public installerPercentage = 97;


// -----------Funder Information--------------
  uint256 public amountRaised;          // Total amount funded for project 
  mapping (address => uint256) public shares;     // Portion of the total funded amount held by this individual
  address[] public contributors;    // AssetFunders
  uint256 public totalPaidToFunders;          // Total amount of Ether redeemed 
  mapping (address => uint256) public paidToFunder;    // Amount investor has withdrawn

  // -------Investment Returns--------------
  uint256 public totalROIReceived;   // Total amount received from Asset

 // --------Stages & Timing------------
  Stages public stages;
  bool private rentrancy_lock = false;


  enum Stages {
    FundingAsset,
    FundingSuccess,
    ReceivingROI
  }

  // TODO: Test storage on Swarm/BigchainDB/IPFS
  function Asset(address _creator, bytes32 _storageHash, address _assetInstaller, uint256 _amountToBeRaised, uint256 _minimumFundingTime, uint256 _id) 
  public {
    myBitHub = MyBitHub(msg.sender);
    projectCreator = _creator;
    assetInstaller = _assetInstaller;
    amountToBeRaised = _amountToBeRaised;
    amountRaised = 0;
    creationDate = block.timestamp;
    deadline = _minimumFundingTime.add(now);
    storageHash = _storageHash;
    id = _id;
    assetCreated(projectCreator, _storageHash, amountToBeRaised, amountRaised, deadline, now);
  }

  // Users can invest in the asset here
  // Requires that the funding goal hasn't been reached and that the funding period isn't over. Will move stage to FundingSuccess once goal is reached
  function fund()
  payable 
  nonReentrant
  requiresEther 
  atStage(Stages.FundingAsset) 
  fundingLimit 
  whenNotPaused
  external 
  returns (bool) {
    if (shares[msg.sender] == 0) {
      contributors.push(msg.sender);
    }
    amountRaised = amountRaised.add(msg.value);
    shares[msg.sender] = shares[msg.sender].add(msg.value);
    return true;
  }

  //  TODO: Send installer remaining Ether or predefined percentage? Worried about rounding errors leaving excess Ether
  // TODO: reduce gas 
  function payout() 
  atStage(Stages.FundingSuccess) 
  nonReentrant 
  whenNotPaused
  external  
  returns (bool) {
    uint256 myBitAmount = amountRaised.getFractionalAmount(myBitFoundationPercentage);
    uint256 lockedTokenAmount = amountRaised.getFractionalAmount(lockedTokensPercentage);
    uint256 installerAmount = amountRaised.getFractionalAmount(installerPercentage);
    assert (myBitAmount != 0 && lockedTokenAmount != 0 && installerAmount != 0);   // This might not add up
    // TODO: send to locked contract
    myBitFoundation.transfer(myBitAmount);
    assetInstaller.transfer(this.balance);   // send the remainder of Ether
    stages = Stages.ReceivingROI; 
    return true;
  }


  function receiveROI() 
  payable 
  requiresEther 
  atStage(Stages.ReceivingROI)
  external 
  returns (bool)  {
    totalROIReceived = totalROIReceived.add(msg.value); 
    receivedROI(msg.sender, msg.value, block.timestamp); 
    return true; 

  }

  //  contributors can retrieve their funds here if campaign is over + failure.
  // TODO: reduce gas by not storing owed value
  function refund() 
  nonReentrant 
  atStage(Stages.FundingAsset) 
  fundingPeriodOver 
  whenNotPaused
  external
  returns (bool) {
    uint256 owed = shares[msg.sender];
    shares[msg.sender] = 0;
    amountRaised = amountRaised.sub(owed);
    msg.sender.transfer(owed);
    return true;
  }

  // TODO: is this method able to be tradeable ....ie. transfer shares when still owed a balance 
  // TODO: the percentage of shares traded, must also transfer the same percentage of paidToFunder
  function withdraw()
  nonReentrant
  atStage(Stages.ReceivingROI)
  whenNotPaused
  external 
  returns (bool){
    require(shares[msg.sender] > 0);
    uint256 totalReceived = this.balance.add(totalPaidToFunders);
    assert (totalROIReceived == totalReceived); 
    uint256 payment = totalReceived.mul(shares[msg.sender]).div(amountRaised).sub(paidToFunder[msg.sender]);
    assert (payment != 0);
    assert (this.balance >= payment);
    paidToFunder[msg.sender] = paidToFunder[msg.sender].add(payment);
    totalPaidToFunders = totalPaidToFunders.add(payment);
    msg.sender.transfer(payment);
    investmentRedeemed(msg.sender, payment, block.timestamp); 
    return true;
}
  // TODO: Decide who has permission for this
  function changeAssetInstaller(address _newInstaller) 
  onlyOwner
  external
  returns (bool) { 
    require(_newInstaller != address(0)); 
    assetInstaller = _newInstaller; 
    return true; 
  }

  modifier nonReentrant() {
    require(!rentrancy_lock);
    rentrancy_lock = true;
    _;
    rentrancy_lock = false;
  }


  modifier onlyOwner { 
    require(myBitHub.validate(msg.sender)); 
    _; 
  }
  
  modifier whenNotPaused { 
    require(!myBitHub.checkPause()); 
    _; 
  }

  modifier atStage(Stages _stage) {
    require(stages == _stage);
    _;
  }

  modifier fundingLimit() {
    require(amountRaised <= amountToBeRaised);
    _;
    if (amountRaised >= amountToBeRaised) {
      stages = Stages.FundingSuccess;
      }
  }

  modifier withinFundingTime() {
    require(now <= deadline);
    _;
  }

  modifier fundingPeriodOver() {
    require(now >= deadline);
    _;
  }

  modifier requiresEther() { 
    require(msg.value > 0);
    _;
  }


  function projectInfo() 
  external 
  view 
  returns (uint256, uint256, uint256, address) {
    return (amountRaised, amountToBeRaised, deadline, projectCreator);
  }

  function () public {
    revert();
  }

  event assetCreated(address _creator, bytes32 _storageHash, uint256 _amountToBeRaised, uint256 _amountRaised, uint256 _deadline, uint256 _now);
  event receivedROI(address indexed _sender, uint256 indexed _amount, uint256 indexed _timestamp); 
  event investmentRedeemed(address indexed _funder, uint256 indexed _amount, uint256 indexed _timestamp);
}
