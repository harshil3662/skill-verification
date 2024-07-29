// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IPFSStorage {
    mapping(uint256 => string) private ipfsHashes;
    uint256 private hashCount;

    event HashAdded(uint256 indexed id, string ipfsHash);

    function addHash(string memory _ipfsHash) public {
        hashCount++;
        ipfsHashes[hashCount] = _ipfsHash;
        emit HashAdded(hashCount, _ipfsHash);
    }

    function getHash(uint256 _id) public view returns (string memory) {
        require(_id > 0 && _id <= hashCount, "Invalid ID");
        return ipfsHashes[_id];
    }

    function getHashCount() public view returns (uint256) {
        return hashCount;
    }
}
