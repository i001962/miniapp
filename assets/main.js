async function connectWallet() {
    let signer = null;
    let address;
    let croptopContract = "0x";
    let contractABI = "";

    const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR-INFURA-API-KEY');
 
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    provider.send('eth_requestAccounts', [])
    .then(async (accounts) => {
        console.log(accounts);
        address = ethers.getAddress(accounts[0]);
        let btn = document.getElementById('connectWallet');
        btn.innerHTML = "connected: " + address;
    })
        .catch(() => console.log('User rejected account access'));

    signer = await provider.getSigner();

    const version = '1';
    const chainId = '1';

    if (signature) {
        const successMessage = 'Successfully signed the request: ' + signature;
        alert(successMessage);
    }
    
}
