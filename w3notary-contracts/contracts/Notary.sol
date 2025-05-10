// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Notary {
    // Mapping from document hash → timestamp when it was notarized
    mapping(bytes32 => uint256) private _timestamps;

    // Emitted when a document hash is recorded
    event DocumentNotarized(
        bytes32 indexed documentHash,
        uint256 timestamp,
        address indexed sender
    );

    /// @notice Record a document hash on‐chain
    /// @param documentHash The SHA256 (or other) hash of the document
    function recordHash(bytes32 documentHash) external {
        require(documentHash != bytes32(0), "Notary: invalid hash");
        require(_timestamps[documentHash] == 0, "Notary: already recorded");

        uint256 ts = block.timestamp;
        _timestamps[documentHash] = ts;

        emit DocumentNotarized(documentHash, ts, msg.sender);
    }

    /// @notice Retrieve the timestamp when a hash was first recorded
    /// @param documentHash The hash to look up
    /// @return The block timestamp at which it was notarized
    function getTimestamp(bytes32 documentHash) external view returns (uint256) {
        require(documentHash != bytes32(0), "Notary: invalid hash");

        uint256 ts = _timestamps[documentHash];
        require(ts != 0, "Notary: hash not found");

        return ts;
    }
}
