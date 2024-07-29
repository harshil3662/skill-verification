const Web3 = require('web3');
const { Helia } = require('helia');
const { HttpRpcProvider } = require('helia/providers/http-rpc');

const web3 = new Web3('https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID');
const helia = new Helia(new HttpRpcProvider('https://api.helia.io'));

// Replace with your contract address and ABI
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const abi = [ /* ABI from the compiled contract */ ];

const ipfsStorage = new web3.eth.Contract(abi, contractAddress);

async function storeIPFSHash(id, ipfsHash) {
  const accounts = await web3.eth.getAccounts();
  await ipfsStorage.methods.storeIPFSHash(id, ipfsHash).send({ from: accounts[0] });
  console.log('IPFS hash stored:', ipfsHash);
}

async function getIPFSHash(id) {
  const hash = await ipfsStorage.methods.getIPFSHash(id).call();
  console.log('Fetched IPFS hash:', hash);
}

// Example usage
(async () => {
  await storeIPFSHash(1, 'QmHashOfIPFSContent');
  await getIPFSHash(1);
})();
