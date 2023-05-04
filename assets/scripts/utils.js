const encodeIPFSUri = (cid) => {
  const decodedCID = base32.decode.asBytes(cid.toUpperCase());
  const slicedCID = decodedCID.slice(3);
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
