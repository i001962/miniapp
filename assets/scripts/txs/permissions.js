const permissionsContract = (chainId) => {
  switch (chainId) {
    case 11155111:
      return "0x4CDb4200e4E65a277676Cd5E8d3c7C7C4dA7fBe5";
    case 11155420:
      return "0x4CDb4200e4E65a277676Cd5E8d3c7C7C4dA7fBe5";
    case 84532:
      return "0x4CDb4200e4E65a277676Cd5E8d3c7C7C4dA7fBe5";
    case 421614:
      return "0x4CDb4200e4E65a277676Cd5E8d3c7C7C4dA7fBe5";
  }
}

const permissionsContractABI = [
		{
			"type": "function",
			"name": "WILDCARD_PROJECT_ID",
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
			"name": "hasPermission",
			"inputs": [
				{
					"name": "operator",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "account",
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
				},
				{
					"name": "includeRoot",
					"type": "bool",
					"internalType": "bool"
				},
				{
					"name": "includeWildcardProjectId",
					"type": "bool",
					"internalType": "bool"
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
			"name": "hasPermissions",
			"inputs": [
				{
					"name": "operator",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "account",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "projectId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "permissionIds",
					"type": "uint256[]",
					"internalType": "uint256[]"
				},
				{
					"name": "includeRoot",
					"type": "bool",
					"internalType": "bool"
				},
				{
					"name": "includeWildcardProjectId",
					"type": "bool",
					"internalType": "bool"
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
			"name": "permissionsOf",
			"inputs": [
				{
					"name": "operator",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "account",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "projectId",
					"type": "uint256",
					"internalType": "uint256"
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
			"name": "setPermissionsFor",
			"inputs": [
				{
					"name": "account",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "permissionsData",
					"type": "tuple",
					"internalType": "struct JBPermissionsData",
					"components": [
						{
							"name": "operator",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "projectId",
							"type": "uint56",
							"internalType": "uint56"
						},
						{
							"name": "permissionIds",
							"type": "uint8[]",
							"internalType": "uint8[]"
						}
					]
				}
			],
			"outputs": [],
			"stateMutability": "nonpayable"
		},
		{
			"type": "event",
			"name": "OperatorPermissionsSet",
			"inputs": [
				{
					"name": "operator",
					"type": "address",
					"indexed": true,
					"internalType": "address"
				},
				{
					"name": "account",
					"type": "address",
					"indexed": true,
					"internalType": "address"
				},
				{
					"name": "projectId",
					"type": "uint256",
					"indexed": true,
					"internalType": "uint256"
				},
				{
					"name": "permissionIds",
					"type": "uint8[]",
					"indexed": false,
					"internalType": "uint8[]"
				},
				{
					"name": "packed",
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
			"name": "JBPermissions_PermissionIdOutOfBounds",
			"inputs": [
				{
					"name": "permissionId",
					"type": "uint256",
					"internalType": "uint256"
				}
			]
		},
		{
			"type": "error",
			"name": "JBPermissions_Unauthorized",
			"inputs": []
		}
	];

const tx_set_permissions = async (projectId, account, chainId) => {
  const contract = permissionsContract(chainId);
  if (!contract) return false;
  const operator = croptopPublisherContract(chainId);
  const permissionsData = { operator, projectId, permissionIds: [22] };
  await sign(contract, permissionsContractABI, "setPermissionsFor", [account, permissionsData]);
  return true;
}
