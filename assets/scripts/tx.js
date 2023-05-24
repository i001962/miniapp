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
  console.log({ chainId: network.chainId });
  return parseInt(network.chainId) || 1;
}

const view = async (contractAddress, contractAbi, fn, params) => {
    const contract = new ethers.Contract(contractAddress, contractAbi, getProvider());
    return await contract[fn](...params);
}

const sign = async (contractAddress, contractAbi, fn, params) => {
    const contract = new ethers.Contract(contractAddress, contractAbi, await getSigner());
    return await contract[fn](...params);
}
