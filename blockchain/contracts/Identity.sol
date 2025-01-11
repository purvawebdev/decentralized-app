// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Identity {
    struct User {
        address userAddress;
        string[] attributes;  // User's attributes like name, age, email
        mapping(address => bool) sharedWith;  // Addresses with access to attributes
        mapping(address => string[]) documents;  // Document hashes shared with specific addresses
    }

    mapping(address => User) private users;

    // Function to create and store a user's attributes (name, age, email)
    function storeAttributes(string[] memory _attributes) public {
        require(_attributes.length > 0, "Attributes cannot be empty");  // Ensure attributes are not empty
        User storage user = users[msg.sender];
        user.userAddress = msg.sender;
        user.attributes = _attributes;
    }

    // Function to retrieve all attributes of a user (only public, not shared)
    function getAttributes(address _user) public view returns (string[] memory) {
        return users[_user].attributes;
    }

    // Function to share user's attributes with another address
    function shareAttributes(address _withAddress) public {
        require(msg.sender != _withAddress, "Cannot share with yourself");
        users[msg.sender].sharedWith[_withAddress] = true;
    }

    // Function to revoke access to shared attributes for a specific address
    function revokeAccess(address _fromAddress) public {
        require(msg.sender != _fromAddress, "Cannot revoke access from yourself");
        users[_fromAddress].sharedWith[msg.sender] = false;
    }

    // Function to check if a specific address has access to the user's attributes
    function hasAccess(address _user) public view returns (bool) {
        return users[_user].sharedWith[msg.sender];
    }

    // Function to store a document hash (e.g., from IPFS) and associate it with the user
    function storeDocument(address _user, string memory documentHash) public {
        require(msg.sender == _user, "Only the user can store their documents");
        users[_user].documents[msg.sender].push(documentHash);
    }

    // Function to get documents associated with a specific user
    function getDocuments(address _user) public view returns (string[] memory) {
        return users[_user].documents[msg.sender];
    }

    // Function to share documents with other users
    function shareDocument(address _user, address _withAddress, string memory documentHash) public {
        require(msg.sender == _user, "Only the user can share their documents");
        users[_user].documents[_withAddress].push(documentHash);
    }
}

