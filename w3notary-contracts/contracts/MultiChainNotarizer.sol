// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MultiChainNotarizer is Ownable {
    event DocumentNotarized(bytes32 indexed hash, uint256 timestamp);

    mapping (bytes32 => uint256) private _documentTimestamps;

    constructor(address initialOwner) Ownable(initialOwner) {}

    function notarize(bytes32 documentHash) external onlyOwner {
        require(_documentTimestamps[documentHash] == 0, "Already notarized");
        _documentTimestamps[documentHash] = block.timestamp;
        emit DocumentNotarized(documentHash, block.timestamp);
    }

    function getTimestamp(bytes32 documentHash) external view returns (uint256) {
        uint256 timestamp = _documentTimestamps[documentHash];
        require(timestamp != 0, "Document is not marked as notarized");
        return timestamp;
    }
}
