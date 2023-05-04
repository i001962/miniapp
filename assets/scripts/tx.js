const getSigner = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  return await provider.getSigner();
}

const sign = async (contractAddress, contractAbi, fn, params) => {
    const contract = new ethers.Contract(contractAddress, contractAbi, await getSigner());
    return await contract[fn](...params);
}
