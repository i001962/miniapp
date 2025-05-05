const croptopPublisherContract = (chainId) => {
  switch (chainId) {
	case 1: // Ethereum Mainnet
      return "0x36438bcb3bdc7c4e042e6886bbc2a0541ecae1ac";
    case 8453: // Base
      return "0x36438bcb3bdc7c4e042e6886bbc2a0541ecae1ac";
    case 10: // Optimism
      return "0x36438bcb3bdc7c4e042e6886bbc2a0541ecae1ac";
    case 42161: // Arbitrum
      return "0x36438bcb3bdc7c4e042e6886bbc2a0541ecae1ac";
    case 11155111:
      return "0x36438bcb3bdc7c4e042e6886bbc2a0541ecae1ac";
    case 11155420:
      return "0x36438bcb3bdc7c4e042e6886bbc2a0541ecae1ac";
    case 84532:
      return "0x36438bcb3bdc7c4e042e6886bbc2a0541ecae1ac";
    case 421614:
      return "0x36438bcb3bdc7c4e042e6886bbc2a0541ecae1ac";
  }
}

const croptopPublisherContractABI = [
	{
		"inputs": [
			{
				"internalType": "contract IJBController",
				"name": "controller",
				"type": "address"
			},
			{
				"internalType": "contract IJBPermissions",
				"name": "permissions",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "feeProjectId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "trustedForwarder",
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
		"name": "FEE_DIVISOR",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "FEE_PROJECT_ID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PERMISSIONS",
		"outputs": [
			{
				"internalType": "contract IJBPermissions",
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
				"name": "hook",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "category",
				"type": "uint256"
			}
		],
		"name": "allowanceFor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "minimumPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "minimumTotalSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maximumTotalSupply",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "allowedAddresses",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "hook",
						"type": "address"
					},
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
				"internalType": "struct CTAllowedPost[]",
				"name": "allowedPosts",
				"type": "tuple[]"
			}
		],
		"name": "configurePostingCriteriaFor",
		"outputs": [],
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
				"internalType": "contract IJB721TiersHook",
				"name": "hook",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "encodedIPFSUri",
						"type": "bytes32"
					},
					{
						"internalType": "uint32",
						"name": "totalSupply",
						"type": "uint32"
					},
					{
						"internalType": "uint104",
						"name": "price",
						"type": "uint104"
					},
					{
						"internalType": "uint24",
						"name": "category",
						"type": "uint24"
					}
				],
				"internalType": "struct CTPost[]",
				"name": "posts",
				"type": "tuple[]"
			},
			{
				"internalType": "address",
				"name": "nftBeneficiary",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "feeBeneficiary",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "additionalPayMetadata",
				"type": "bytes"
			},
			{
				"internalType": "bytes",
				"name": "feeMetadata",
				"type": "bytes"
			}
		],
		"name": "mintFrom",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "hook",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "encodedIPFSUri",
				"type": "bytes32"
			}
		],
		"name": "tierIdForEncodedIPFSUriOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "hook",
				"type": "address"
			},
			{
				"internalType": "bytes32[]",
				"name": "encodedIPFSUris",
				"type": "bytes32[]"
			}
		],
		"name": "tiersFor",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint32",
						"name": "id",
						"type": "uint32"
					},
					{
						"internalType": "uint104",
						"name": "price",
						"type": "uint104"
					},
					{
						"internalType": "uint32",
						"name": "remainingSupply",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "initialSupply",
						"type": "uint32"
					},
					{
						"internalType": "uint104",
						"name": "votingUnits",
						"type": "uint104"
					},
					{
						"internalType": "uint16",
						"name": "reserveFrequency",
						"type": "uint16"
					},
					{
						"internalType": "address",
						"name": "reserveBeneficiary",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "encodedIPFSUri",
						"type": "bytes32"
					},
					{
						"internalType": "uint24",
						"name": "category",
						"type": "uint24"
					},
					{
						"internalType": "uint8",
						"name": "discountPercent",
						"type": "uint8"
					},
					{
						"internalType": "bool",
						"name": "allowOwnerMint",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "transfersPausable",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "cannotBeRemoved",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "cannotIncreaseDiscountPercent",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "resolvedUri",
						"type": "string"
					}
				],
				"internalType": "struct JB721Tier[]",
				"name": "tiers",
				"type": "tuple[]"
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
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "hook",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "hook",
						"type": "address"
					},
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
				"indexed": false,
				"internalType": "struct CTAllowedPost",
				"name": "allowedPost",
				"type": "tuple"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "caller",
				"type": "address"
			}
		],
		"name": "ConfigurePostingCriteria",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "contract IJB721TiersHook",
				"name": "hook",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "nftBeneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "feeBeneficiary",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "encodedIPFSUri",
						"type": "bytes32"
					},
					{
						"internalType": "uint32",
						"name": "totalSupply",
						"type": "uint32"
					},
					{
						"internalType": "uint104",
						"name": "price",
						"type": "uint104"
					},
					{
						"internalType": "uint24",
						"name": "category",
						"type": "uint24"
					}
				],
				"indexed": false,
				"internalType": "struct CTPost[]",
				"name": "posts",
				"type": "tuple[]"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "postValue",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "txValue",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "caller",
				"type": "address"
			}
		],
		"name": "Mint",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "CTPublisher_EmptyEncodedIPFSUri",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "expected",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "sent",
				"type": "uint256"
			}
		],
		"name": "CTPublisher_InsufficientEthSent",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "min",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "max",
				"type": "uint256"
			}
		],
		"name": "CTPublisher_MaxTotalSupplyLessThanMin",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "allowedAddresses",
				"type": "address[]"
			}
		],
		"name": "CTPublisher_NotInAllowList",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "minimumPrice",
				"type": "uint256"
			}
		],
		"name": "CTPublisher_PriceTooSmall",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "totalSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maximumTotalSupply",
				"type": "uint256"
			}
		],
		"name": "CTPublisher_TotalSupplyTooBig",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "totalSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "minimumTotalSupply",
				"type": "uint256"
			}
		],
		"name": "CTPublisher_TotalSupplyTooSmall",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "CTPublisher_UnauthorizedToPostInCategory",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "CTPublisher_ZeroTotalSupply",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "JBMetadataResolver_DataNotPadded",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "JBMetadataResolver_MetadataTooShort",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "permissionId",
				"type": "uint256"
			}
		],
		"name": "JBPermissioned_Unauthorized",
		"type": "error"
	}
];

const tx_view_allowance = async (hook, category, chainId) => {
  const contract = croptopPublisherContract(chainId);
  if (!contract) return [0, 0, 0, []];
  return await view(chainId, contract, croptopPublisherContractABI, "allowanceFor", [hook, category]);
}

const tx_view_tiers = async (hook, encodedIPFSUris, chainId) => {
  const contract = croptopPublisherContract(chainId);
  if (!contract) return [[0, 0, 0]];
  try {
    return await view(chainId, contract, croptopPublisherContractABI, "tiersFor", [hook, encodedIPFSUris]);
  } catch (e) {
	console.log({ e });
    return [[0, 0, 0]];  
  }
}

// Multi-chain collect
const tx_collect = async (hook, category, totalSupply, price, quantity, encodedIPFSUri, beneficiary, cpnBeneficiary, value, chainId) => {
  const post = {totalSupply, price, quantity, category, encodedIPFSUri};
  const posts = Array.from({length: quantity}, () => post);
  const emptyBytes = '0x';

  const buildDeploymentData = async () => {
    return [hook, posts, beneficiary, cpnBeneficiary, emptyBytes, emptyBytes, { value }];
  };

  return handleDeployment(
    [chainId],
    buildDeploymentData,
    croptopPublisherContract,
    croptopPublisherContractABI,
    "mintFrom",
	value
  );
}

// Multi-chain configure
const tx_configure = async (hook, category, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses, chainIds) => {
  const allowedPost = { hook, category, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses };

  const buildDeploymentData = async () => {
    return [[allowedPost]];
  };

  return handleDeployment(
    chainIds,
    buildDeploymentData,
    croptopPublisherContract,
    croptopPublisherContractABI,
    "configurePostingCriteriaFor"
  );
}

