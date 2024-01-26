const permissionsContract = (chainId) => {
  switch (chainId) {
    case 11155111:
      return "0xDd68353f90B9c82eF1e6adf1F0f458c5f02534d6";
  }
}

const permissionsContractABI = [{"type":"constructor","inputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"PERMISSIONS","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract IJBPermissions"}],"stateMutability":"view"},{"type":"function","name":"hasPermission","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"account","type":"address","internalType":"address"},{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"permissionId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"hasPermissions","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"account","type":"address","internalType":"address"},{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"permissionIds","type":"uint256[]","internalType":"uint256[]"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"permissionsOf","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"account","type":"address","internalType":"address"},{"name":"projectId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"setPermissionsFor","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"permissionsData","type":"tuple","internalType":"struct JBPermissionsData","components":[{"name":"operator","type":"address","internalType":"address"},{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"permissionIds","type":"uint256[]","internalType":"uint256[]"}]}],"outputs":[],"stateMutability":"nonpayable"},{"type":"event","name":"OperatorPermissionsSet","inputs":[{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"projectId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"permissionIds","type":"uint256[]","indexed":false,"internalType":"uint256[]"},{"name":"packed","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"caller","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"error","name":"PERMISSION_ID_OUT_OF_BOUNDS","inputs":[]},{"type":"error","name":"UNAUTHORIZED","inputs":[]}];

const tx_set_permissions = async (projectId, account, chainId) => {
  const contract = permissionsContract(chainId);
  if (!contract) return false;
  const operator = croptopPublisherContract(chainId);
  const permissionsData = { operator, projectId, permissionIds: [22] };
  await sign(contract, permissionsContractABI, "setPermissionsFor", [account, permissionsData]);
  return true;
}
