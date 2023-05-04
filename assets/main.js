function encodeIPFSUri(cid) {
  const decodedCID = base32.decode.asBytes(cid.toUpperCase());
  const slicedCID = decodedCID.slice(3);
  const uint8Array = new Uint8Array(slicedCID);
  let hex = '0x';
  for (let i = 0; i < uint8Array.length; i++) {
    hex += uint8Array[i].toString(16).padStart(2, '0');
  }
  return hex;
}

async function connectWallet(encodedIPFSUri) {
    const croptopContract = "0xa079c8fcecd912e005410a065c6346c5501f4527";
    const projectId = 654;
    // const encodedIPFSUri = "0x9618af14f80eb618f518b749ea55610aaf0c671a481fdd36eee6854c4a548ef2";
    const category = 2;
    const price = BigInt("100000000000000000");
    const quantity = 3;

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
    
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const beneficiary = signer.address;
    const contract = new ethers.Contract(croptopContract, contractABI, signer);
    const post = {quantity, price, category, encodedIPFSUri};
    const result = await contract.mint(projectId, [post], beneficiary, {
      value: price + (price / 20n) 
    });
}
