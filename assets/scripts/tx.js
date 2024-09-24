const getProvider = (chainId) => {
  switch (chainId) {
    case 11155111: return new ethers.JsonRpcProvider(env.ethereumSepoliaRPC || "https://rpc.ankr.com/eth_sepolia");
    case 11155420: return new ethers.JsonRpcProvider(env.optimismSepoliaRPC || "https://rpc.ankr.com/optimism_sepolia");
    case 84532: return new ethers.JsonRpcProvider(env.baseSepoliaRPC || "https://rpc.ankr.com/base_sepolia");
    case 421614: return new ethers.JsonRpcProvider(env.arbitrumSepoliaRPC || "https://rpc.ankr.com/arbitrum_sepolia");
    default: return new ethers.BrowserProvider(window.ethereum);
  }
}

const getSigner = async (chainId) => {
  const provider = getProvider(chainId); 
  return await provider.getSigner();
}

const getChainId = async (chainId) => {
  const provider = getProvider(chainId); 
  let network = await provider.getNetwork();
  return parseInt(network.chainId);
}

const switchNetwork = async (id, chainId) => {
  const provider = getProvider(chainId); 
  return await provider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: `0x${id.toString(16)}`}],
  });
}

const view = async (chainId, contractAddress, contractAbi, fn, params) => {
    const contract = new ethers.Contract(contractAddress, contractAbi, getProvider(chainId));
    return await contract[fn](...params);
}

const sign = async (contractAddress, contractAbi, fn, params) => {
    const contract = new ethers.Contract(contractAddress, contractAbi, await getSigner());
    console.log({ contract, fn , params });
    const tx = await contract[fn](...params);
    if (!tx) return false;
    return await tx.wait();
}
