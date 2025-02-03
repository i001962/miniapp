const croptopDeployerContract = (chainId) => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "0x38050f79dd6dde6d366f6daad6e7adf4e1014e08";
    case 8453: // Base
      return "0x38050f79dd6dde6d366f6daad6e7adf4e1014e08";
    case 10: // Optimism
      return "0x38050f79dd6dde6d366f6daad6e7adf4e1014e08";
    case 42161: // Arbitrum
      return "0x38050f79dd6dde6d366f6daad6e7adf4e1014e08";
    case 11155111:
      return "0x38050f79dd6dde6d366f6daad6e7adf4e1014e08";
    case 11155420:
      return "0x38050f79dd6dde6d366f6daad6e7adf4e1014e08";
    case 84532:
      return "0x38050f79dd6dde6d366f6daad6e7adf4e1014e08";
    case 421614:
      return "0x38050f79dd6dde6d366f6daad6e7adf4e1014e08";
  }
}

const revnetDeployerContract = (chainId) => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "0x027f1684c6d31066c3f2468117f2508e8134fdfc";
    case 8453: // Base
      return "0x027f1684c6d31066c3f2468117f2508e8134fdfc";
    case 10: // Optimism
      return "0x027f1684c6d31066c3f2468117f2508e8134fdfc";
    case 42161: // Arbitrum
      return "0x027f1684c6d31066c3f2468117f2508e8134fdfc";
    case 11155111:
      return "0x027f1684c6d31066c3f2468117f2508e8134fdfc";
    case 11155420:
      return "0x027f1684c6d31066c3f2468117f2508e8134fdfc";
    case 84532:
      return "0x027f1684c6d31066c3f2468117f2508e8134fdfc";
    case 421614:
      return "0x027f1684c6d31066c3f2468117f2508e8134fdfc";
  }
}

const terminalContract = (chainId) => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "0xdb9644369c79c3633cde70d2df50d827d7dc7dbc";
    case 8453: // Base
      return "0xdb9644369c79c3633cde70d2df50d827d7dc7dbc";
    case 10: // Optimism
      return "0xdb9644369c79c3633cde70d2df50d827d7dc7dbc";
    case 42161: // Arbitrum
      return "0xdb9644369c79c3633cde70d2df50d827d7dc7dbc";
    case 11155111:
      return "0xdb9644369c79c3633cde70d2df50d827d7dc7dbc";
    case 11155420:
      return "0xdb9644369c79c3633cde70d2df50d827d7dc7dbc";
    case 84532:
      return "0xdb9644369c79c3633cde70d2df50d827d7dc7dbc";
    case 421614:
      return "0xdb9644369c79c3633cde70d2df50d827d7dc7dbc";
  }
}

const loansContract = (chainId) => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "0x03de624feb08c0edeff779ca5702aef4b85d7f06";
    case 8453: // Base
      return "0x03de624feb08c0edeff779ca5702aef4b85d7f06";
    case 10: // Optimism
      return "0x03de624feb08c0edeff779ca5702aef4b85d7f06";
    case 42161: // Arbitrum
      return "0x03de624feb08c0edeff779ca5702aef4b85d7f06";
    case 11155111:
      return "0x03de624feb08c0edeff779ca5702aef4b85d7f06";
    case 11155420:
      return "0x03de624feb08c0edeff779ca5702aef4b85d7f06";
    case 84532:
      return "0x03de624feb08c0edeff779ca5702aef4b85d7f06";
    case 421614:
      return "0x03de624feb08c0edeff779ca5702aef4b85d7f06";
  }
}

const pricesContract = (chainId) => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "0xe712d14b04f1a1fe464be930e3ea72b9b0a141d7";
    case 8453: // Base
      return "0xe712d14b04f1a1fe464be930e3ea72b9b0a141d7";
    case 10: // Optimism
      return "0xe712d14b04f1a1fe464be930e3ea72b9b0a141d7";
    case 42161: // Arbitrum
      return "0xe712d14b04f1a1fe464be930e3ea72b9b0a141d7";
    case 11155111:
      return "0xe712d14b04f1a1fe464be930e3ea72b9b0a141d7";
    case 11155420:
      return "0xe712d14b04f1a1fe464be930e3ea72b9b0a141d7";
    case 84532:
      return "0xe712d14b04f1a1fe464be930e3ea72b9b0a141d7";
    case 421614:
      return "0xe712d14b04f1a1fe464be930e3ea72b9b0a141d7";
  }
}

const croptopDeployerContractABI = [
	{
		"inputs": [
			{
				"internalType": "contract IJBController",
				"name": "controller",
				"type": "address"
			},
			{
				"internalType": "contract IJB721TiersHookProjectDeployer",
				"name": "deployer",
				"type": "address"
			},
			{
				"internalType": "contract ICTPublisher",
				"name": "publisher",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "trusted_forwarder",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "CONTROLLER",
		"outputs": [
			{
				"internalType": "contract IJBController",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DEPLOYER",
		"outputs": [
			{
				"internalType": "contract IJB721TiersHookProjectDeployer",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PUBLISHER",
		"outputs": [
			{
				"internalType": "contract ICTPublisher",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "contract IJBTerminal",
						"name": "terminal",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "token",
								"type": "address"
							},
							{
								"internalType": "uint8",
								"name": "decimals",
								"type": "uint8"
							},
							{
								"internalType": "uint32",
								"name": "currency",
								"type": "uint32"
							}
						],
						"internalType": "struct JBAccountingContext[]",
						"name": "accountingContextsToAccept",
						"type": "tuple[]"
					}
				],
				"internalType": "struct JBTerminalConfig[]",
				"name": "terminalConfigurations",
				"type": "tuple[]"
			},
			{
				"internalType": "string",
				"name": "projectUri",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "uint24",
						"name": "category",
						"type": "uint24"
					},
					{
						"internalType": "uint104",
						"name": "minimumPrice",
						"type": "uint104"
					},
					{
						"internalType": "uint32",
						"name": "minimumTotalSupply",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "maximumTotalSupply",
						"type": "uint32"
					},
					{
						"internalType": "address[]",
						"name": "allowedAddresses",
						"type": "address[]"
					}
				],
				"internalType": "struct CTDeployerAllowedPost[]",
				"name": "allowedPosts",
				"type": "tuple[]"
			},
			{
				"internalType": "string",
				"name": "contractUri",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "salt",
				"type": "bytes32"
			}
		],
		"name": "deployProjectFor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"internalType": "contract IJB721TiersHook",
				"name": "hook",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "forwarder",
				"type": "address"
			}
		],
		"name": "isTrustedForwarder",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "onERC721Received",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "trustedForwarder",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
  
// Remove the duplicated functions and keep only the specific deployment functions
const tx_deploy_project = async (name, symbol, owner, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses, chainIds, salt) => {
  const projectUri = "QmaJzQjaFKxU2LLyqPTpZoGU47owQcmmvVCP1p4YqeuMUy";
  const contractUri = "";
  const allowedPost = { hook: "0x0000000000000000000000000000000000000000", category: 0, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses};
  
  const buildDeploymentData = async (chainId) => {
    const accountingContextToAccept = { token:"0x000000000000000000000000000000000000EEEe", decimals: 18, currency: 61166 };
    const terminal = terminalContract(chainId);
    const terminalConfiguration = { terminal, accountingContextsToAccept: [accountingContextToAccept] };
    return [owner, [terminalConfiguration], projectUri, [allowedPost], contractUri, name, symbol, salt];
  };
  
  console.log({ chainIds, buildDeploymentData });
  const receipt = await handleDeployment(
    chainIds,
    buildDeploymentData,
    croptopDeployerContract,
    croptopDeployerContractABI,
    "deployProjectFor"
  );

  if (!receipt) return false;

  // If this is a Relayr quote, return it directly
  if (receipt.payment_info || receipt.bundle_uuid) {
    return receipt;
  }

  const interface = new ethers.Interface(croptopDeployerContractABI);
  const decodedLog = interface.parseLog(receipt.logs[0]);
  const collectionAddress = decodedLog.args[1]; 
  return collectionAddress;
}

const tx_deploy_revnet = async (name, symbol, owner, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses, stage1AutomintTokenAmount, stage2AutomintTokenAmount, stage3AutomintTokenAmount, stage1InitialIssuanceAmount, stage2InitialIssuanceAmount, stage3InitialIssuanceAmount, stage1SplitPercent, stage2SplitPercent, stage3SplitPercent, stage1PriceIncreasePercent, stage2PriceIncreasePercent, stage3PriceIncreasePercent, stage1PriceIncreaseFrequency, stage2PriceIncreaseFrequency, stage3PriceIncreaseFrequency, stage1CashOutTaxRate, stage2CashOutTaxRate, stage3CashOutTaxRate, stage2StartsAtOrAfter, stage3StartsAtOrAfter, chainIds, salt) => {
  const projectUri = "QmaJzQjaFKxU2LLyqPTpZoGU47owQcmmvVCP1p4YqeuMUy";
  const contractUri = "";
  const allowedPost = { hook: "0x0000000000000000000000000000000000000000", category: 0, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses};
  
  const buildDeploymentData = async (chainId) => {
    const terminal = terminalContract(chainId);
    const loans = loansContract(chainId);
    const accountingContextToAccept = { token:"0x000000000000000000000000000000000000EEEe", decimals: 18, currency: 61166 };
    const terminalConfiguration = { terminal, accountingContextsToAccept: [accountingContextToAccept] };
    
    const baseCurrency = 1;
    const stage1StartsAtOrAfter = 1;
    const autoMintStage1 = stage1AutomintTokenAmount == 0 ? [] : [{ chainId, count: stage1AutomintTokenAmount, beneficiary: owner}];
    const stageConfiguration1 = { startsAtOrAfter: stage1StartsAtOrAfter, splitPercent: stage1SplitPercent, initialIssuance: stage1InitialIssuanceAmount, issuanceDecayFrequency: stage1PriceIncreaseFrequency, issuanceDecayPercent: stage1PriceIncreasePercent, cashOutTaxRate: stage1CashOutTaxRate, autoMints: autoMintStage1, extraMetadata: "0x0000" };
    
    const stageConfigurations = [stageConfiguration1];
    if (stage2StartsAtOrAfter != 0) {
      const autoMintStage2 = stage2AutomintTokenAmount == 0 ? [] : [{ chainId, count: stage2AutomintTokenAmount, beneficiary: owner}];
      stageConfigurations.push({startsAtOrAfter: stage2StartsAtOrAfter, splitPercent: stage2SplitPercent, initialIssuance: stage2InitialIssuanceAmount, issuanceDecayFrequency: stage2PriceIncreaseFrequency, issuanceDecayPercent: stage2PriceIncreasePercent, cashOutTaxRate: stage2CashOutTaxRate, autoMints: autoMintStage2, extraMetadata: "0x0000"}); 
    }
    if (stage3StartsAtOrAfter != 0) {
      const autoMintStage3 = stage3AutomintTokenAmount == 0 ? [] : [{ chainId, count: stage3AutomintTokenAmount, beneficiary: owner}];
      stageConfigurations.push({startsAtOrAfter: stage3StartsAtOrAfter, splitPercent: stage3SplitPercent, initialIssuance: stage3InitialIssuanceAmount, issuanceDecayFrequency: stage3PriceIncreaseFrequency, issuanceDecayPercent: stage3PriceIncreasePercent, cashOutTaxRate: stage3CashOutTaxRate, autoMints: autoMintStage3, extraMetadata: "0x0000" }); 
    }
    
    const description = { name, ticker: symbol, uri: projectUri, salt };
    const loanSource = { token: "0x000000000000000000000000000000000000EEEe", terminal };
    const revnetConfiguration = { description, baseCurrency, splitOperator: owner, stageConfigurations, loanSources: [loanSource], loans, allowCrosschainSuckerExtension: true };
    const buybackHookConfiguration = { hook: "0x0000000000000000000000000000000000000000", poolConfigurations: []};
    const baseUri = "ipfs://";
    const tokenUriResolver = "0x0000000000000000000000000000000000000000";
    const tiers = [];
    const currency = 1;
    const decimals = 18;
    const prices = pricesContract(chainId);
    const tiersConfig = { tiers, currency, decimals, prices };
    const reserveBeneficiary = "0x0000000000000000000000000000000000000000";
    const flags = { noNewTiersWithReserves: false, noNewTiersWithVotes: false, noNewTiersWithOwnerMinting: false, preventOverspending: false };
    const baseline721HookConfiguration = { name, symbol, baseUri, tokenUriResolver, contractUri, tiersConfig, reserveBeneficiary, flags };
    const hookConfiguration = {baseline721HookConfiguration, splitOperatorCanAdjustTiers: true, splitOperatorCanUpdateMetadata: true, splitOperatorCanMint: false, splitOperatorCanIncreaseDiscountPercent: true};
    const suckerDeploymentConfiguration = { deployerConfigurations: [], salt };
    
    return [0, revnetConfiguration, [terminalConfiguration], buybackHookConfiguration, suckerDeploymentConfiguration, hookConfiguration, [allowedPost]];
  };

  const receipt = await handleDeployment(
    chainIds,
    buildDeploymentData,
    revnetDeployerContract,
    revnetDeployerContractABI,
    "deployWith721sFor"
  );

  if (!receipt) return false;

  // If this is a Relayr quote, return it directly
  if (receipt.payment_info || receipt.bundle_uuid) {
    return receipt;
  }

  const interface = new ethers.Interface(revnetDeployerContractABI);
  const decodedLog = interface.parseLog(receipt.logs[0]);
  const collectionAddress = decodedLog.args[1]; 
  return collectionAddress;
}
