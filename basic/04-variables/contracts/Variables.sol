// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Variables {
    uint256 public timestamp = block.timestamp; // Current block timestamp
    address public sender = msg.sender; // address of the caller
    // State variables are stored on the blockchain.
    string public text = "Hello";
    uint256 public num = 123;

    function getLocalValue() public pure returns (uint256) {
        // Local variables are not saved to the blockchain.
        uint256 i = 456;
        return i;
    }

    function getSender() public view returns (address) {
        return msg.sender;
    }

    function getTimestamp() public view returns (uint256) {
        return block.timestamp;
    }
}
