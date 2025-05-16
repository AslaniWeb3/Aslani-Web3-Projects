
async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            document.getElementById('walletAddress').value = accounts[0];
        } catch (error) {
            alert('Connection failed.');
        }
    } else {
        alert('Please install MetaMask!');
    }
}

async function getBalance() {
    const address = document.getElementById('walletAddress').value;
    if (!window.ethereum || !address) return alert('Please connect wallet and enter address.');
    const web3 = new Web3(window.ethereum);
    const balance = await web3.eth.getBalance(address);
    document.getElementById('balance').innerText = 'BNB Balance: ' + web3.utils.fromWei(balance, 'ether');
}
