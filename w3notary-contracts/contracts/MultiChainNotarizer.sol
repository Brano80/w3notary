```solidity
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MultiChainNotarizer is Ownable {

    struct Document {
        bytes32 hash;
        uint256 timestamp;
    }

    mapping(string => Document) private documents;

    function notarizeDocument(string memory _id, bytes32 _hash) public onlyOwner {
        Document memory newDoc = Document({hash: _hash, timestamp: block.timestamp});
        documents[_id] = newDoc;
    }

    function verifyDocument(string memory _id, bytes32 _hash) public view returns (bool) {
        Document memory doc = documents[_id];
        return (doc.hash == _hash);
    }

    function getDocument(string memory _id) public view returns (bytes32, uint256) {
        Document memory doc = documents[_id];
        return (doc.hash, doc.timestamp);
    }

}
```

This code creates a new Solidity contract named `MultiChainNotarizer` that inherits from OpenZeppelin's Ownable contract. It uses a struct named `Document` to store document hashes with their timestamps, and a mapping to associate these with document IDs. It includes functions to notarize a new document, verify an existing document's hash, and get a document's hash and timestamp by its ID. The `notarizeDocument` function can only be called by the contract's owner, ensuring appropriate access control.