const croptopContract = async () => {
    return "0xea28cb5405d05abe0a87b16e26fb709f55341cf6";
}
const contractABI = [
    {
      "inputs": [
        {
          "internalType": "contract IJBController3_1",
          "name": "_controller",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_feeProjectId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "INCOMPATIBLE_DATA_SOURCE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INSUFFICIENT_AMOUNT",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INSUFFICIENT_TOTAL_SUPPLY",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_FEE_PERCENT",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_MINIMUM_TOTAL_SUPPY",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UNAUTHORIZED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UNAUTHORIZED_CATEGORY",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "projectId",
          "type": "uint256"
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
              "internalType": "uint88",
              "name": "price",
              "type": "uint88"
            },
            {
              "internalType": "uint16",
              "name": "category",
              "type": "uint16"
            }
          ],
          "indexed": false,
          "internalType": "struct Post[]",
          "name": "posts",
          "type": "tuple[]"
        },
        {
          "indexed": false,
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
          "indexed": false,
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        }
      ],
      "name": "Collected",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_nft",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_category",
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
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
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
              "internalType": "uint88",
              "name": "price",
              "type": "uint88"
            },
            {
              "internalType": "uint16",
              "name": "category",
              "type": "uint16"
            }
          ],
          "internalType": "struct Post[]",
          "name": "_posts",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "_nftBeneficiary",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_feeBeneficiary",
          "type": "address"
        }
      ],
      "name": "collect",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "nft",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "category",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumTotalSupply",
              "type": "uint256"
            }
          ],
          "internalType": "struct AllowedPost[]",
          "name": "_allowedPosts",
          "type": "tuple[]"
        }
      ],
      "name": "configure",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "controller",
      "outputs": [
        {
          "internalType": "contract IJBController3_1",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeDivisor",
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
      "name": "feeProjectId",
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
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_encodedIPFSUri",
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
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_nft",
          "type": "address"
        },
        {
          "internalType": "bytes32[]",
          "name": "_encodedIPFSUris",
          "type": "bytes32[]"
        }
      ],
      "name": "tiersFor",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "remainingQuantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "initialQuantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "votingUnits",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reservedRate",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "reservedTokenBeneficiary",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "encodedIPFSUri",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "category",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "allowManualMint",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "transfersPausable",
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
    }
  ];

const tx_view_allowance = async (projectId, category) => {
  return await view(await croptopContract(), contractABI, "allowanceFor", [projectId, "0x0000000000000000000000000000000000000000", category]);
}

const tx_view_tier = async (projectId, encodedIPFSUri) => {
  console.log({  projectId, encodedIPFSUri});
  return await view(await croptopContract(), contractABI, "tiersFor", [projectId, "0x0000000000000000000000000000000000000000", [encodedIPFSUri]]);
}

const tx_collect = async (projectId, category, totalSupply, price, encodedIPFSUri, beneficiary, cpnBeneficiary) => {
  const bigIntPrice = BigInt(price);
  const post = {totalSupply, price: bigIntPrice, category, encodedIPFSUri};
  const divisor = BigInt("20");
  if (!beneficiary) beneficiary = (await getSigner()).address;
  if (!cpnBeneficiary) cpnBeneficiary = beneficiary; 
  console.log({ projectId, posts: [post], beneficiary, cpnBeneficiary});
  return await sign(await croptopContract(), contractABI, "collect", [projectId, [post], beneficiary, cpnBeneficiary, {
      value: bigIntPrice + (projectId == 758 ? BigInt(0) : (bigIntPrice / divisor)) 
  }]);
}
