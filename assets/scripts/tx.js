const getProvider = () => {
  return new ethers.BrowserProvider(window.ethereum);
}

const getSigner = async () => {
  const provider = getProvider(); 
  return await provider.getSigner();
}

const getChainId = async () => {
  const provider = getProvider(); 
  let network = await provider.getNetwork();
  return parseInt(network.chainId);
}

const switchNetwork = async (id) => {
  const provider = getProvider(); 
  return await provider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: `0x${id.toString(16)}`}],
  });
}

const view = async (contractAddress, contractAbi, fn, params) => {
    const contract = new ethers.Contract(contractAddress, contractAbi, getProvider());
    return await contract[fn](...params);
}

const sign = async (contractAddress, contractAbi, fn, params) => {
    const contract = new ethers.Contract(contractAddress, contractAbi, await getSigner());
    return await contract[fn](...params);
}
