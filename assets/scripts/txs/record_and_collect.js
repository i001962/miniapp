const recordAndCollect = async (projectId, category, quantity, price, encodedIPFSUri) => {
    const croptopContract = "0xa079c8fcecd912e005410a065c6346c5501f4527";
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
        },
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
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
      "name": "INVALID_FEE_PERCENT",
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
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "allowedCategoryFor",
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
          "internalType": "uint256",
          "name": "_percent",
          "type": "uint256"
        }
      ],
      "name": "changeFee",
      "outputs": [],
      "stateMutability": "nonpayable",
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
              "internalType": "uint256",
              "name": "category",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumPrice",
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
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "minPostPriceFor",
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
          "components": [
            {
              "internalType": "bytes32",
              "name": "encodedIPFSUri",
              "type": "bytes32"
            },
            {
              "internalType": "uint40",
              "name": "quantity",
              "type": "uint40"
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
          "name": "_beneficiary",
          "type": "address"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
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
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];


  const beneficiary = (await getSigner()).address;
  const bigIntPrice = BigInt(price);
  const post = {quantity, price: bigIntPrice, category, encodedIPFSUri};
  const divisor = BigInt("20");
  return await sign(croptopContract, contractABI, "mint", [projectId, [post], beneficiary, {
      value: bigIntPrice + (bigIntPrice / divisor) 
  }]);
}
