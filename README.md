# Decentralized Digital Identity Application

## Overview
This project is a Decentralized Digital Identity Application designed to provide users with a secure and transparent way to manage their identities using blockchain technology. Built with React.js for the frontend, Node.js for backend integration, and Ganache as the local Ethereum blockchain environment, this app utilizes smart contracts deployed via Truffle to handle identity-related data.

### Features:
- **Decentralized Identity Management**: Users can securely store and manage their identity details on the blockchain.
- **MetaMask Integration**: Seamless wallet connection for user authentication and transaction handling.
- **Smart Contract Interaction**: Profile information is stored and updated via Ethereum smart contracts.
- **Ganache Testing Environment**: Local blockchain for development and testing without the need for real ETH.

## Folder Structure
```
project-folder/
├── frontend/           # Frontend application
│   ├── components/      # Reusable React components
│   ├── pages/           # Page-level components (e.g., ProfilePage)
│   ├── App.js           # Main app entry point
│   ├── index.js         # React DOM rendering
│   ├── ProfilePage.css  # CSS for ProfilePage
│   ├── package.json     # Frontend dependencies
├── backend/            # Backend Node.js server
│   ├── server.js        # Express server setup
│   ├── routes/          # API routes
│   ├── controllers/     # Backend logic
│   ├── models/          # Data models
│   ├── package.json     # Backend dependencies
├── blockchain/         # Blockchain-related files
│   ├── contracts/       # Solidity smart contracts
│   ├── migrations/      # Deployment scripts
│   ├── build/           # Compiled contracts from Truffle
│   ├── test/            # Smart contract test files
│   ├── truffle-config.js# Truffle configuration
├── README.md            # Project documentation
```

## Prerequisites
- **Node.js** (>=14.0.0)
- **npm** (>=6.0.0)
- **Truffle** (>=5.0.0): Install with `npm install -g truffle`
- **Ganache**: Install via the [Ganache CLI](https://trufflesuite.com/ganache/)
- **MetaMask**: Browser extension for Ethereum wallets

## Instructions to Run

### 1. Clone the Repository
```bash
git clone <repository-url>
cd project-folder
```

### 2. Install Dependencies
Navigate to the respective folders and install the required dependencies:
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

# Blockchain
cd ../blockchain
npm install
```

### 3. Compile and Deploy Smart Contracts
Ensure Ganache is running. Compile and deploy the contracts:
```bash
cd blockchain
truffle compile
truffle migrate
```

### 4. Start the Backend
Navigate to the backend folder and start the server:
```bash
cd ../backend
node server.js
```

### 5. Start the Frontend
Navigate to the frontend folder and start the React application:
```bash
cd ../frontend
npm start
```
The app will be accessible at `http://localhost:3000`.

### 6. Connect MetaMask
- Open MetaMask in your browser.
- Add a new network and configure it to connect to your local Ganache network.
- Import an account from Ganache using its private key.

### 7. Test the Application
- Connect your wallet to the app.
- Interact with your profile by viewing or editing your identity details.

## Troubleshooting
- **Smart Contract Errors**: Verify that Ganache is running and the contract address matches the deployed instance.
- **MetaMask Issues**: Ensure MetaMask is set to the correct network and account.
- **Frontend or Backend Errors**: Check the console logs for debugging information.

## License
This project is licensed under the MIT License.

