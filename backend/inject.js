const { Web3 } = require('web3');  // Correct way to import Web3 in the latest version
const contractABI = require('./abi/Identity.json');  // Path to your ABI file
require('dotenv').config();

// Initialize Web3 with the HTTP provider from .env
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.PROVIDER_URL));

// Get contract instance
const contract = new web3.eth.Contract(contractABI.abi, process.env.CONTRACT_ADDRESS);

// Function to get available accounts
async function getAccounts() {
    return await web3.eth.getAccounts();
}

module.exports = { web3, contract, getAccounts };
