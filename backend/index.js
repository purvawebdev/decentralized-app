require('dotenv').config();  // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { web3, contract, getAccounts } = require('./inject');  // Import Web3 setup and contract instance

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());  // Parse incoming JSON requests

// Root route to test if the server is working
app.get('/', (req, res) => {
    res.send('Welcome to the Decentralized Identity App! The server is running.');
});

// Route to store user attributes
app.post('/storeAttributes', async (req, res) => {
    const { attributes } = req.body;  // Expect an array of attributes (e.g., name, age, email)

    // Get the available accounts from the blockchain (Ganache)
    const accounts = await getAccounts();
    const userAccount = accounts[0];  // Using the first account for this action

    try {
        // Call the smart contract's storeAttributes method to store user attributes
        await contract.methods.storeAttributes(attributes).send({
            from: userAccount,
            gas: 5000000,  // Gas limit for the transaction
        });
        res.status(200).json({ success: true });  // Respond with success
    } catch (error) {
        console.error(error);  // Log any error
        res.status(500).json({ success: false, error: error.message });  // Respond with error details
    }
});

// Route to get user attributes by address
app.get('/getAttributes/:address', async (req, res) => {
    const { address } = req.params;  // Get the address from the URL parameter

    try {
        // Call the smart contract's getAttributes method to fetch user attributes
        const attributes = await contract.methods.getAttributes(address).call();
        res.status(200).json({ attributes });  // Respond with attributes
    } catch (error) {
        console.error(error);  // Log any error
        res.status(500).json({ success: false, error: error.message });  // Respond with error details
    }
});

// Start the backend server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);  // Print a message to confirm the server is running
});
