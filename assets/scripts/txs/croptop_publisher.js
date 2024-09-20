const croptopPublisherContract = (chainId) => {
  switch (chainId) {
    case 11155111:
      return "0xDd0B2C80A18617F9428c1e9b096fE2DcE222d5F8";
  }
}

const croptopPublisherContractABI = [
		{
			"type": "constructor",
			"inputs": [
				{
					"name": "controller",
					"type": "address",
					"internalType": "contract IJBController"
				},
				{
					"name": "permissions",
					"type": "address",
					"internalType": "contract IJBPermissions"
				},
				{
					"name": "feeProjectId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "trustedForwarder",
					"type": "address",
					"internalType": "address"
				}
			],
			"stateMutability": "nonpayable"
		},
		{
			"type": "function",
			"name": "CONTROLLER",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract IJBController"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "FEE_DIVISOR",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "FEE_PROJECT_ID",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "PERMISSIONS",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract IJBPermissions"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "allowanceFor",
			"inputs": [
				{
					"name": "hook",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "category",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"outputs": [
				{
					"name": "minimumPrice",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "minimumTotalSupply",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "maximumTotalSupply",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "allowedAddresses",
					"type": "address[]",
					"internalType": "address[]"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "configurePostingCriteriaFor",
			"inputs": [
				{
					"name": "allowedPosts",
					"type": "tuple[]",
					"internalType": "struct CTAllowedPost[]",
					"components": [
						{
							"name": "hook",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "category",
							"type": "uint24",
							"internalType": "uint24"
						},
						{
							"name": "minimumPrice",
							"type": "uint104",
							"internalType": "uint104"
						},
						{
							"name": "minimumTotalSupply",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "maximumTotalSupply",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "allowedAddresses",
							"type": "address[]",
							"internalType": "address[]"
						}
					]
				}
			],
			"outputs": [],
			"stateMutability": "nonpayable"
		},
		{
			"type": "function",
			"name": "isTrustedForwarder",
			"inputs": [
				{
					"name": "forwarder",
					"type": "address",
					"internalType": "address"
				}
			],
			"outputs": [
				{
					"name": "",
					"type": "bool",
					"internalType": "bool"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "mintFrom",
			"inputs": [
				{
					"name": "hook",
					"type": "address",
					"internalType": "contract IJB721TiersHook"
				},
				{
					"name": "posts",
					"type": "tuple[]",
					"internalType": "struct CTPost[]",
					"components": [
						{
							"name": "encodedIPFSUri",
							"type": "bytes32",
							"internalType": "bytes32"
						},
						{
							"name": "totalSupply",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "price",
							"type": "uint104",
							"internalType": "uint104"
						},
						{
							"name": "category",
							"type": "uint24",
							"internalType": "uint24"
						}
					]
				},
				{
					"name": "nftBeneficiary",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "feeBeneficiary",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "additionalPayMetadata",
					"type": "bytes",
					"internalType": "bytes"
				},
				{
					"name": "feeMetadata",
					"type": "bytes",
					"internalType": "bytes"
				}
			],
			"outputs": [],
			"stateMutability": "payable"
		},
		{
			"type": "function",
			"name": "tierIdForEncodedIPFSUriOf",
			"inputs": [
				{
					"name": "hook",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "encodedIPFSUri",
					"type": "bytes32",
					"internalType": "bytes32"
				}
			],
			"outputs": [
				{
					"name": "",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "tiersFor",
			"inputs": [
				{
					"name": "hook",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "encodedIPFSUris",
					"type": "bytes32[]",
					"internalType": "bytes32[]"
				}
			],
			"outputs": [
				{
					"name": "tiers",
					"type": "tuple[]",
					"internalType": "struct JB721Tier[]",
					"components": [
						{
							"name": "id",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "price",
							"type": "uint104",
							"internalType": "uint104"
						},
						{
							"name": "remainingSupply",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "initialSupply",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "votingUnits",
							"type": "uint104",
							"internalType": "uint104"
						},
						{
							"name": "reserveFrequency",
							"type": "uint16",
							"internalType": "uint16"
						},
						{
							"name": "reserveBeneficiary",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "encodedIPFSUri",
							"type": "bytes32",
							"internalType": "bytes32"
						},
						{
							"name": "category",
							"type": "uint24",
							"internalType": "uint24"
						},
						{
							"name": "discountPercent",
							"type": "uint8",
							"internalType": "uint8"
						},
						{
							"name": "allowOwnerMint",
							"type": "bool",
							"internalType": "bool"
						},
						{
							"name": "transfersPausable",
							"type": "bool",
							"internalType": "bool"
						},
						{
							"name": "cannotBeRemoved",
							"type": "bool",
							"internalType": "bool"
						},
						{
							"name": "cannotIncreaseDiscountPercent",
							"type": "bool",
							"internalType": "bool"
						},
						{
							"name": "resolvedUri",
							"type": "string",
							"internalType": "string"
						}
					]
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "trustedForwarder",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "address"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "event",
			"name": "ConfigurePostingCriteria",
			"inputs": [
				{
					"name": "hook",
					"type": "address",
					"indexed": true,
					"internalType": "address"
				},
				{
					"name": "allowedPost",
					"type": "tuple",
					"indexed": false,
					"internalType": "struct CTAllowedPost",
					"components": [
						{
							"name": "hook",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "category",
							"type": "uint24",
							"internalType": "uint24"
						},
						{
							"name": "minimumPrice",
							"type": "uint104",
							"internalType": "uint104"
						},
						{
							"name": "minimumTotalSupply",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "maximumTotalSupply",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "allowedAddresses",
							"type": "address[]",
							"internalType": "address[]"
						}
					]
				},
				{
					"name": "caller",
					"type": "address",
					"indexed": false,
					"internalType": "address"
				}
			],
			"anonymous": false
		},
		{
			"type": "event",
			"name": "Mint",
			"inputs": [
				{
					"name": "projectId",
					"type": "uint256",
					"indexed": true,
					"internalType": "uint256"
				},
				{
					"name": "hook",
					"type": "address",
					"indexed": true,
					"internalType": "contract IJB721TiersHook"
				},
				{
					"name": "nftBeneficiary",
					"type": "address",
					"indexed": true,
					"internalType": "address"
				},
				{
					"name": "feeBeneficiary",
					"type": "address",
					"indexed": false,
					"internalType": "address"
				},
				{
					"name": "posts",
					"type": "tuple[]",
					"indexed": false,
					"internalType": "struct CTPost[]",
					"components": [
						{
							"name": "encodedIPFSUri",
							"type": "bytes32",
							"internalType": "bytes32"
						},
						{
							"name": "totalSupply",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "price",
							"type": "uint104",
							"internalType": "uint104"
						},
						{
							"name": "category",
							"type": "uint24",
							"internalType": "uint24"
						}
					]
				},
				{
					"name": "postValue",
					"type": "uint256",
					"indexed": false,
					"internalType": "uint256"
				},
				{
					"name": "txValue",
					"type": "uint256",
					"indexed": false,
					"internalType": "uint256"
				},
				{
					"name": "caller",
					"type": "address",
					"indexed": false,
					"internalType": "address"
				}
			],
			"anonymous": false
		},
		{
			"type": "error",
			"name": "CTPublisher_EmptyEncodedIPFSUri",
			"inputs": []
		},
		{
			"type": "error",
			"name": "CTPublisher_InsufficientEthSent",
			"inputs": [
				{
					"name": "expected",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "sent",
					"type": "uint256",
					"internalType": "uint256"
				}
			]
		},
		{
			"type": "error",
			"name": "CTPublisher_MaxTotalSupplyLessThanMin",
			"inputs": [
				{
					"name": "min",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "max",
					"type": "uint256",
					"internalType": "uint256"
				}
			]
		},
		{
			"type": "error",
			"name": "CTPublisher_NotInAllowList",
			"inputs": [
				{
					"name": "addr",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "allowedAddresses",
					"type": "address[]",
					"internalType": "address[]"
				}
			]
		},
		{
			"type": "error",
			"name": "CTPublisher_PriceTooSmall",
			"inputs": [
				{
					"name": "price",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "minimumPrice",
					"type": "uint256",
					"internalType": "uint256"
				}
			]
		},
		{
			"type": "error",
			"name": "CTPublisher_TotalSupplyTooBig",
			"inputs": [
				{
					"name": "totalSupply",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "maximumTotalSupply",
					"type": "uint256",
					"internalType": "uint256"
				}
			]
		},
		{
			"type": "error",
			"name": "CTPublisher_TotalSupplyTooSmall",
			"inputs": [
				{
					"name": "totalSupply",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "minimumTotalSupply",
					"type": "uint256",
					"internalType": "uint256"
				}
			]
		},
		{
			"type": "error",
			"name": "CTPublisher_UnauthorizedToPostInCategory",
			"inputs": []
		},
		{
			"type": "error",
			"name": "CTPublisher_ZeroTotalSupply",
			"inputs": []
		},
		{
			"type": "error",
			"name": "JBMetadataResolver_DataNotPadded",
			"inputs": []
		},
		{
			"type": "error",
			"name": "JBMetadataResolver_MetadataTooShort",
			"inputs": []
		},
		{
			"type": "error",
			"name": "JBPermissioned_Unauthorized",
			"inputs": [
				{
					"name": "account",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "sender",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "projectId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "permissionId",
					"type": "uint256",
					"internalType": "uint256"
				}
			]
		}
	];

const tx_view_allowance = async (hook, category, chainId) => {
  const contract = croptopPublisherContract(chainId);
  if (!contract) return [0, 0, 0];
  return await view(chainId, contract, croptopPublisherContractABI, "allowanceFor", [hook, category]);
}

const tx_view_tiers = async (hook, encodedIPFSUris, chainId) => {
  const contract = croptopPublisherContract(chainId);
  if (!contract) return [[0, 0, 0]];
  try {
    console.log({  chainId, contract, croptopPublisherContractABI, hook, encodedIPFSUris});
    return await view(chainId, contract, croptopPublisherContractABI, "tiersFor", [hook, encodedIPFSUris]);
  } catch (e) {
    console.log({  chainId, e });
    return [];  
  }
}

const tx_collect = async (hook, category, totalSupply, price, quantity, encodedIPFSUri, beneficiary, cpnBeneficiary, value, chainId) => {
  const contract = croptopPublisherContract(chainId);
  if (!contract) return false;
  const post = {totalSupply, price, quantity, category, encodedIPFSUri};
  const posts = Array.from({length: quantity}, () => post);
  const emptyBytes = '0x';
  await sign(contract, croptopPublisherContractABI, "mintFrom", [hook, posts, beneficiary, cpnBeneficiary, emptyBytes, emptyBytes, {
      value 
  }]);
  return true;
}

const tx_configure = async (hook, category, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses, chainId) => {
  const contract = croptopPublisherContract(chainId);
  if (!contract) return false;
  const allowedPost = { hook, category, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses};
  await sign(contract, croptopPublisherContractABI, "configurePostingCriteriaFor", [[allowedPost]]);
  return true;
}
