const getProvider = () => {
  return new ethers.BrowserProvider(window.ethereum);
}

const getSigner = async () => {
  const provider = getProvider(); 
  return await provider.getSigner();
}

const view = async (contractAddress, contractAbi, fn, params) => {
    const contract = new ethers.Contract(contractAddress, contractAbi, getProvider());
    return await contract[fn](...params);
}

const sign = async (contractAddress, contractAbi, fn, params) => {
    const contract = new ethers.Contract(contractAddress, contractAbi, await getSigner());
    return await contract[fn](...params);
}
