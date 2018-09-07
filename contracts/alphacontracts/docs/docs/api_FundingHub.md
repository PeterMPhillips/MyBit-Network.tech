---
id: FundingHub
title: FundingHub
---

<div class="contract-doc"><div class="contract"><h2 class="contract-header"><span class="contract-kind">contract</span> FundingHub</h2><div class="source">Source: <a href="https://github.com/MyBitFoundation/MyBit/blob/v1.0.0/contracts/FundingHub.sol" target="_blank">FundingHub.sol</a></div></div><div class="index"><h2>Index</h2><ul><li><a href="FundingHub.html#LogAssetFunded">LogAssetFunded</a></li><li><a href="FundingHub.html#LogAssetFundingFailed">LogAssetFundingFailed</a></li><li><a href="FundingHub.html#LogAssetFundingSuccess">LogAssetFundingSuccess</a></li><li><a href="FundingHub.html#LogAssetPayout">LogAssetPayout</a></li><li><a href="FundingHub.html#LogDestruction">LogDestruction</a></li><li><a href="FundingHub.html#LogNewFunder">LogNewFunder</a></li><li><a href="FundingHub.html#LogRefund">LogRefund</a></li><li><a href="FundingHub.html#anyOwner">anyOwner</a></li><li><a href="FundingHub.html#atStage">atStage</a></li><li><a href="FundingHub.html#destroy">destroy</a></li><li><a href="FundingHub.html#">fallback</a></li><li><a href="FundingHub.html#">fallback</a></li><li><a href="FundingHub.html#fund">fund</a></li><li><a href="FundingHub.html#fundingLimit">fundingLimit</a></li><li><a href="FundingHub.html#fundingPeriodOver">fundingPeriodOver</a></li><li><a href="FundingHub.html#initiateRefund">initiateRefund</a></li><li><a href="FundingHub.html#nonReentrant">nonReentrant</a></li><li><a href="FundingHub.html#onlyApproved">onlyApproved</a></li><li><a href="FundingHub.html#payout">payout</a></li><li><a href="FundingHub.html#priceUpdated">priceUpdated</a></li><li><a href="FundingHub.html#refund">refund</a></li><li><a href="FundingHub.html#requiresEther">requiresEther</a></li><li><a href="FundingHub.html#whenNotPaused">whenNotPaused</a></li></ul></div><div class="reference"><h2>Reference</h2><div class="events"><h3>Events</h3><ul><li><div class="item event"><span id="LogAssetFunded" class="anchor-marker"></span><h4 class="name">LogAssetFunded</h4><div class="body"><code class="signature">event <strong>LogAssetFunded</strong><span>(bytes32 _assetID, address _sender, uint _amount) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_assetID</code> - bytes32</div><div><code>_sender</code> - address</div><div><code>_amount</code> - uint</div></dd></dl></div></div></li><li><div class="item event"><span id="LogAssetFundingFailed" class="anchor-marker"></span><h4 class="name">LogAssetFundingFailed</h4><div class="body"><code class="signature">event <strong>LogAssetFundingFailed</strong><span>(bytes32 _assetID, uint _amountRaised) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_assetID</code> - bytes32</div><div><code>_amountRaised</code> - uint</div></dd></dl></div></div></li><li><div class="item event"><span id="LogAssetFundingSuccess" class="anchor-marker"></span><h4 class="name">LogAssetFundingSuccess</h4><div class="body"><code class="signature">event <strong>LogAssetFundingSuccess</strong><span>(bytes32 _assetID, uint _currentEthPrice, uint _amountRaised) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_assetID</code> - bytes32</div><div><code>_currentEthPrice</code> - uint</div><div><code>_amountRaised</code> - uint</div></dd></dl></div></div></li><li><div class="item event"><span id="LogAssetPayout" class="anchor-marker"></span><h4 class="name">LogAssetPayout</h4><div class="body"><code class="signature">event <strong>LogAssetPayout</strong><span>(bytes32 _assetID, uint _amount) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_assetID</code> - bytes32</div><div><code>_amount</code> - uint</div></dd></dl></div></div></li><li><div class="item event"><span id="LogDestruction" class="anchor-marker"></span><h4 class="name">LogDestruction</h4><div class="body"><code class="signature">event <strong>LogDestruction</strong><span>(address _locationSent, uint _amountSent, address _caller) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_locationSent</code> - address</div><div><code>_amountSent</code> - uint</div><div><code>_caller</code> - address</div></dd></dl></div></div></li><li><div class="item event"><span id="LogNewFunder" class="anchor-marker"></span><h4 class="name">LogNewFunder</h4><div class="body"><code class="signature">event <strong>LogNewFunder</strong><span>(bytes32 _assetID, address _funder) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_assetID</code> - bytes32</div><div><code>_funder</code> - address</div></dd></dl></div></div></li><li><div class="item event"><span id="LogRefund" class="anchor-marker"></span><h4 class="name">LogRefund</h4><div class="body"><code class="signature">event <strong>LogRefund</strong><span>(bytes32 _assetID, address _funder, uint _amount) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_assetID</code> - bytes32</div><div><code>_funder</code> - address</div><div><code>_amount</code> - uint</div></dd></dl></div></div></li></ul></div><div class="modifiers"><h3>Modifiers</h3><ul><li><div class="item modifier"><span id="anyOwner" class="anchor-marker"></span><h4 class="name">anyOwner</h4><div class="body"><code class="signature">modifier <strong>anyOwner</strong><span>() </span></code><hr/></div></div></li><li><div class="item modifier"><span id="atStage" class="anchor-marker"></span><h4 class="name">atStage</h4><div class="body"><code class="signature">modifier <strong>atStage</strong><span>(bytes32 _assetID, uint _stage) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_assetID</code> - bytes32</div><div><code>_stage</code> - uint</div></dd></dl></div></div></li><li><div class="item modifier"><span id="fundingLimit" class="anchor-marker"></span><h4 class="name">fundingLimit</h4><div class="body"><code class="signature">modifier <strong>fundingLimit</strong><span>(bytes32 _assetID) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_assetID</code> - bytes32</div></dd></dl></div></div></li><li><div class="item modifier"><span id="fundingPeriodOver" class="anchor-marker"></span><h4 class="name">fundingPeriodOver</h4><div class="body"><code class="signature">modifier <strong>fundingPeriodOver</strong><span>(bytes32 _assetID) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_assetID</code> - bytes32</div></dd></dl></div></div></li><li><div class="item modifier"><span id="nonReentrant" class="anchor-marker"></span><h4 class="name">nonReentrant</h4><div class="body"><code class="signature">modifier <strong>nonReentrant</strong><span>() </span></code><hr/></div></div></li><li><div class="item modifier"><span id="onlyApproved" class="anchor-marker"></span><h4 class="name">onlyApproved</h4><div class="body"><code class="signature">modifier <strong>onlyApproved</strong><span>() </span></code><hr/></div></div></li><li><div class="item modifier"><span id="priceUpdated" class="anchor-marker"></span><h4 class="name">priceUpdated</h4><div class="body"><code class="signature">modifier <strong>priceUpdated</strong><span>() </span></code><hr/></div></div></li><li><div class="item modifier"><span id="requiresEther" class="anchor-marker"></span><h4 class="name">requiresEther</h4><div class="body"><code class="signature">modifier <strong>requiresEther</strong><span>() </span></code><hr/></div></div></li><li><div class="item modifier"><span id="whenNotPaused" class="anchor-marker"></span><h4 class="name">whenNotPaused</h4><div class="body"><code class="signature">modifier <strong>whenNotPaused</strong><span>() </span></code><hr/></div></div></li></ul></div><div class="functions"><h3>Functions</h3><ul><li><div class="item function"><span id="destroy" class="anchor-marker"></span><h4 class="name">destroy</h4><div class="body"><code class="signature">function <strong>destroy</strong><span>(address _functionInitiator, address _holdingAddress) </span><span>public </span></code><hr/><dl><dt><span class="label-modifiers">Modifiers:</span></dt><dd><a href="FundingHub.html#anyOwner">anyOwner </a></dd><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_functionInitiator</code> - address</div><div><code>_holdingAddress</code> - address</div></dd></dl></div></div></li><li><div class="item function"><span id="fallback" class="anchor-marker"></span><h4 class="name">fallback</h4><div class="body"><code class="signature">function <strong></strong><span>() </span><span>public </span></code><hr/></div></div></li><li><div class="item function"><span id="fallback" class="anchor-marker"></span><h4 class="name">fallback</h4><div class="body"><code class="signature">function <strong></strong><span>(address _database) </span><span>public </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_database</code> - address</div></dd></dl></div></div></li><li><div class="item function"><span id="fund" class="anchor-marker"></span><h4 class="name">fund</h4><div class="body"><code class="signature">function <strong>fund</strong><span>(bytes32 _assetID) </span><span>external </span><span>payable </span><span>returns  (bool) </span></code><hr/><dl><dt><span class="label-modifiers">Modifiers:</span></dt><dd><a href="FundingHub.html#requiresEther">requiresEther </a><a href="FundingHub.html#whenNotPaused">whenNotPaused </a><a href="FundingHub.html#atStage">atStage </a><a href="FundingHub.html#priceUpdated">priceUpdated </a><a href="FundingHub.html#fundingLimit">fundingLimit </a><a href="FundingHub.html#onlyApproved">onlyApproved </a></dd><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_assetID</code> - bytes32</div></dd><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li><li><div class="item function"><span id="initiateRefund" class="anchor-marker"></span><h4 class="name">initiateRefund</h4><div class="body"><code class="signature">function <strong>initiateRefund</strong><span>(bytes32 _assetID) </span><span>external </span><span>returns  (bool) </span></code><hr/><dl><dt><span class="label-modifiers">Modifiers:</span></dt><dd><a href="FundingHub.html#fundingPeriodOver">fundingPeriodOver </a><a href="FundingHub.html#atStage">atStage </a></dd><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_assetID</code> - bytes32</div></dd><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li><li><div class="item function"><span id="payout" class="anchor-marker"></span><h4 class="name">payout</h4><div class="body"><code class="signature">function <strong>payout</strong><span>(bytes32 _assetID) </span><span>external </span><span>returns  (bool) </span></code><hr/><dl><dt><span class="label-modifiers">Modifiers:</span></dt><dd><a href="FundingHub.html#nonReentrant">nonReentrant </a><a href="FundingHub.html#whenNotPaused">whenNotPaused </a><a href="FundingHub.html#atStage">atStage </a></dd><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_assetID</code> - bytes32</div></dd><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li><li><div class="item function"><span id="refund" class="anchor-marker"></span><h4 class="name">refund</h4><div class="body"><code class="signature">function <strong>refund</strong><span>(bytes32 _assetID) </span><span>external </span><span>returns  (bool) </span></code><hr/><dl><dt><span class="label-modifiers">Modifiers:</span></dt><dd><a href="FundingHub.html#nonReentrant">nonReentrant </a><a href="FundingHub.html#whenNotPaused">whenNotPaused </a><a href="FundingHub.html#atStage">atStage </a></dd><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_assetID</code> - bytes32</div></dd><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li></ul></div></div></div>