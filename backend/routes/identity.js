const Web3 = require('web3');
const contractABI = require('./abi/Identity.json'); // Make sure this path is correct, pointing to the ABI file
require('dotenv').config();

// Set up Web3 provider
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.PROVIDER_URL));

// Get contract instance
const contract = new web3.eth.Contract(contractABI.abi, process.env.CONTRACT_ADDRESS);

// Get available accounts from Ganache or other Ethereum network
async function getAccounts() {
    return await web3.eth.getAccounts();
}

// Function to store user attributes on the blockchain
async function storeAttributes(attributes) {
    const accounts = await getAccounts();
    const userAccount = accounts[0];  // Using the first account for this action

    try {
        // Call the smart contract's storeAttributes method to store user attributes
        await contract.methods.storeAttributes(attributes).send({
            from: userAccount,
            gas: 5000000,  // Gas limit for the transaction
        });
        return { success: true };
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}

// Function to get user attributes from the blockchain
async function getAttributes(address) {
    try {
        // Call the smart contract's getAttributes method to fetch user attributes
        const attributes = await contract.methods.getAttributes(address).call();
        return { attributes };
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}

// Function to share user attributes with another address
async function shareAttributes(withAddress) {
    const accounts = await getAccounts();
    const userAccount = accounts[0];  // Using the first account for this action

    try {
        // Call the smart contract's shareAttributes method to share attributes
        await contract.methods.shareAttributes(withAddress).send({
            from: userAccount,
            gas: 5000000,  // Gas limit for the transaction
        });
        return { success: true };
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}

// Function to revoke access to shared attributes for a specific address
async function revokeAccess(fromAddress) {
    const accounts = await getAccounts();
    const userAccount = accounts[0];  // Using the first account for this action

    try {
        // Call the smart contract's revokeAccess method to revoke access
        await contract.methods.revokeAccess(fromAddress).send({
            from: userAccount,
            gas: 5000000,  // Gas limit for the transaction
        });
        return { success: true };
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}

// Function to store a document hash on the blockchain
async function storeDocument(documentHash) {
    const accounts = await getAccounts();
    const userAccount = accounts[0];  // Using the first account for this action

    try {
        // Call the smart contract's storeDocument method to store the document hash
        await contract.methods.storeDocument(userAccount, documentHash).send({
            from: userAccount,
            gas: 5000000,  // Gas limit for the transaction
        });
        return { success: true };
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}

// Function to get documents associated with a user by their address
async function getDocuments(address) {
    try {
        // Call the smart contract's getDocuments method to fetch the user's documents
        const documents = await contract.methods.getDocuments(address).call();
        return { documents };
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}

module.exports = {
    storeAttributes,
    getAttributes,
    shareAttributes,
    revokeAccess,
    storeDocument,
    getDocuments,
};
