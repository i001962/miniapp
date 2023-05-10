const encodeIPFSUri = (cid) => {
  const decodedCID = bs58.decode(cid);
  const slicedCID = decodedCID.slice(2);
  const uint8Array = new Uint8Array(slicedCID);
  let hex = '0x';
  for (let i = 0; i < uint8Array.length; i++) 
    hex += uint8Array[i].toString(16).padStart(2, '0');
  return hex;
}

const formatTimestamp = (timestamp) => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const dateObj = new Date((timestamp + 978307200) * 1000);
  const month = months[dateObj.getMonth()];
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  return `${month} ${day}, ${year}`;
}

const {CID} = Multiformats;

const increaseQuantity = (a, b) => {
  let input = b.previousElementSibling;
  let value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  a.stopPropagation();
}

const decreaseQuantity = (a, b) => {
  let input = b.nextElementSibling;
  let value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
  a.stopPropagation();
}