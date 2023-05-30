const encodeIPFSUri = (cid) => {
  const decodedCID = bs58.decode(cid);
  const slicedCID = decodedCID.slice(2);
  const uint8Array = new Uint8Array(slicedCID);
  let hex = '0x';
  for (let i = 0; i < uint8Array.length; i++) 
    hex += uint8Array[i].toString(16).padStart(2, '0');
  return hex;
}

const encodeIPFSUriFrom = async (prefix, itemId) => {
  // Create the content's encoded IPFS URL.
  const cidUrl = `${prefix}${itemId}/nft.json.cid.txt`;
  const cid = await (await fetch(cidUrl)).text();
  return cid ? encodeIPFSUri(cid) : "";
}

const formatDate = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}.${day}.${year.toString().slice(-2)}`;
}

const formatTimestamp = (timestamp) => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const date = new Date((timestamp + 978307200) * 1000);
  return formatDate(date);
}

const resolveChainId = (value) => {
  switch (value) {
    case "mainnet": return 1; 
    case "goerli": return 5; 
  }
}

const resolveChainSelectIndex = (chain) => {
  switch (chain) {
    case "goerli": return 0; 
  }
}

const resolveChain = (chainId) => {
  switch (chainId) {
    case 1: return "mainnet"; 
    case 5: return "goerli"; 
  }
}

const cpnProjectId = (chain) => {
  switch (chain) {
    case "goerli":
      return 758;
  }
}

const projectLinkBase = (chain) => {
  switch (chain) {
    case "goerli": 
      return "https://goerli.juicebox.money/v2/p/";
  }
}

const loadingAnimationPace = 100;
let loadingAnimationIntervals = {};

/// Animate the loading ticker.
const startLoadingAnimation = (loadingAnimationId) => {
  const loadingAnimation = document.getElementById(loadingAnimationId);
  loadingAnimation.style.display = "inherit";
  const loadingAnimationFrames = ['-', '\\', '|', '/'];
  let currentFrame = 0;

  const animate = () => {
    loadingAnimation.textContent = loadingAnimationFrames[currentFrame];
    currentFrame = (currentFrame + 1) % loadingAnimationFrames.length;
    loadingAnimationIntervals[loadingAnimationId] = setTimeout(animate, loadingAnimationPace);
  }

  animate();
}

/// Stop animating the loading ticker.
const stopLoadingAnimation = (loadingAnimationId) => {
  const loadingAnimation = document.getElementById(loadingAnimationId);
  loadingAnimationIntervals[loadingAnimationId] = clearTimeout(loadingAnimationIntervals[loadingAnimationId]);
  loadingAnimation.style.display = "none";
}

// const {CID} = Multiformats;

