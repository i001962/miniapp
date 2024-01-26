const croptopPublisherContract = (chainId) => {
  switch (chainId) {
    case 11155111:
      return "0x8935821409a1Ba535cca0a71Cb79DB207b17b57F";
  }
}

const croptopPublisherContractABI = [{"type":"constructor","inputs":[{"name":"controller","type":"address","internalType":"contract IJBController"},{"name":"feeProjectId","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"CONTROLLER","inputs":[],"outputs":[{"name":"","type":"address","internalType":"contract IJBController"}],"stateMutability":"view"},{"type":"function","name":"FEE_DIVISOR","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"FEE_PROJECT_ID","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"allowanceFor","inputs":[{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"nft","type":"address","internalType":"address"},{"name":"category","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"minimumPrice","type":"uint256","internalType":"uint256"},{"name":"minimumTotalSupply","type":"uint256","internalType":"uint256"},{"name":"maximumTotalSupply","type":"uint256","internalType":"uint256"},{"name":"allowedAddresses","type":"address[]","internalType":"address[]"}],"stateMutability":"view"},{"type":"function","name":"configurePostingCriteriaFor","inputs":[{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"allowedPosts","type":"tuple[]","internalType":"struct AllowedPost[]","components":[{"name":"nft","type":"address","internalType":"address"},{"name":"category","type":"uint256","internalType":"uint256"},{"name":"minimumPrice","type":"uint256","internalType":"uint256"},{"name":"minimumTotalSupply","type":"uint256","internalType":"uint256"},{"name":"maximumTotalSupply","type":"uint256","internalType":"uint256"},{"name":"allowedAddresses","type":"address[]","internalType":"address[]"}]}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"mintFrom","inputs":[{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"posts","type":"tuple[]","internalType":"struct Post[]","components":[{"name":"encodedIPFSUri","type":"bytes32","internalType":"bytes32"},{"name":"totalSupply","type":"uint32","internalType":"uint32"},{"name":"price","type":"uint88","internalType":"uint88"},{"name":"category","type":"uint16","internalType":"uint16"}]},{"name":"nftBeneficiary","type":"address","internalType":"address"},{"name":"feeBeneficiary","type":"address","internalType":"address"},{"name":"additionalPayMetadata","type":"bytes","internalType":"bytes"},{"name":"feeMetadata","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"payable"},{"type":"function","name":"tierIdForEncodedIPFSUriOf","inputs":[{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"encodedIPFSUri","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"tiersFor","inputs":[{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"nft","type":"address","internalType":"address"},{"name":"encodedIPFSUris","type":"bytes32[]","internalType":"bytes32[]"}],"outputs":[{"name":"tiers","type":"tuple[]","internalType":"struct JB721Tier[]","components":[{"name":"id","type":"uint256","internalType":"uint256"},{"name":"price","type":"uint256","internalType":"uint256"},{"name":"remainingSupply","type":"uint256","internalType":"uint256"},{"name":"initialSupply","type":"uint256","internalType":"uint256"},{"name":"votingUnits","type":"uint256","internalType":"uint256"},{"name":"reserveFrequency","type":"uint256","internalType":"uint256"},{"name":"reserveBeneficiary","type":"address","internalType":"address"},{"name":"encodedIPFSUri","type":"bytes32","internalType":"bytes32"},{"name":"category","type":"uint256","internalType":"uint256"},{"name":"allowOwnerMint","type":"bool","internalType":"bool"},{"name":"transfersPausable","type":"bool","internalType":"bool"},{"name":"resolvedUri","type":"string","internalType":"string"}]}],"stateMutability":"view"},{"type":"event","name":"Collected","inputs":[{"name":"projectId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"nftBeneficiary","type":"address","indexed":true,"internalType":"address"},{"name":"feeBeneficiary","type":"address","indexed":true,"internalType":"address"},{"name":"posts","type":"tuple[]","indexed":false,"internalType":"struct Post[]","components":[{"name":"encodedIPFSUri","type":"bytes32","internalType":"bytes32"},{"name":"totalSupply","type":"uint32","internalType":"uint32"},{"name":"price","type":"uint88","internalType":"uint88"},{"name":"category","type":"uint16","internalType":"uint16"}]},{"name":"fee","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"caller","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"event","name":"Configured","inputs":[{"name":"projectId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"allowedPosts","type":"tuple[]","indexed":false,"internalType":"struct AllowedPost[]","components":[{"name":"nft","type":"address","internalType":"address"},{"name":"category","type":"uint256","internalType":"uint256"},{"name":"minimumPrice","type":"uint256","internalType":"uint256"},{"name":"minimumTotalSupply","type":"uint256","internalType":"uint256"},{"name":"maximumTotalSupply","type":"uint256","internalType":"uint256"},{"name":"allowedAddresses","type":"address[]","internalType":"address[]"}]},{"name":"caller","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"error","name":"EMPTY_ENCODED_IPFS_URI","inputs":[{"name":"encodedUri","type":"bytes32","internalType":"bytes32"}]},{"type":"error","name":"INCOMPATIBLE_PROJECT","inputs":[{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"dataSource","type":"address","internalType":"address"},{"name":"expectedInterfaceId","type":"bytes4","internalType":"bytes4"}]},{"type":"error","name":"INSUFFICIENT_ETH_SENT","inputs":[{"name":"expected","type":"uint256","internalType":"uint256"},{"name":"sent","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"MAX_TOTAL_SUPPLY_LESS_THAN_MIN","inputs":[]},{"type":"error","name":"METADATA_TOO_SHORT","inputs":[]},{"type":"error","name":"NOT_IN_ALLOW_LIST","inputs":[{"name":"allowedAddresses","type":"address[]","internalType":"address[]"}]},{"type":"error","name":"PRICE_TOO_SMALL","inputs":[{"name":"minimumPrice","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"TOTAL_SUPPLY_TOO_BIG","inputs":[{"name":"maximumTotalSupply","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"TOTAL_SUPPLY_TOO_SMALL","inputs":[{"name":"minimumTotalSupply","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"TOTAL_SUPPY_MUST_BE_POSITIVE","inputs":[]},{"type":"error","name":"UNAUTHORIZED","inputs":[]},{"type":"error","name":"UNAUTHORIZED_TO_POST_IN_CATEGORY","inputs":[]}];

const tx_view_allowance = async (projectId, category, chainId) => {
  const contract = croptopPublisherContract(chainId);
  if (!contract) return [0, 0, 0];
  return await view(chainId, contract, croptopPublisherContractABI, "allowanceFor", [projectId, "0x0000000000000000000000000000000000000000", category]);
}

const tx_view_tiers = async (projectId, encodedIPFSUris, chainId) => {
  const contract = croptopPublisherContract(chainId);
  if (!contract) return [[0, 0, 0]];
  try {
    return await view(chainId, contract, croptopPublisherContractABI, "tiersFor", [projectId, "0x0000000000000000000000000000000000000000", encodedIPFSUris]);
  } catch (e) {
    console.log({  chainId, e });
    return [];  
  }
}

const tx_collect = async (projectId, category, totalSupply, price, quantity, encodedIPFSUri, beneficiary, cpnBeneficiary, value, chainId) => {
  const contract = croptopPublisherContract(chainId);
  if (!contract) return false;
  const post = {totalSupply, price, quantity, category, encodedIPFSUri};
  const posts = Array.from({length: quantity}, () => post);
  const emptyBytes = '0x';
  await sign(contract, croptopPublisherContractABI, "mintFrom", [projectId, posts, beneficiary, cpnBeneficiary, emptyBytes, emptyBytes, {
      value 
  }]);
  return true;
}

const tx_configure = async (projectId, category, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses, chainId) => {
  const contract = croptopPublisherContract(chainId);
  if (!contract) return false;
  const allowedPost = { nft: "0x0000000000000000000000000000000000000000", category, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses};
  await sign(contract, croptopPublisherContractABI, "configurePostingCriteriaFor", [projectId, [allowedPost]]);
  return true;
}
