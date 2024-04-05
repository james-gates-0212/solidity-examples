// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract HelloWorld {
    string message;

    constructor() {
        message = "Hello, World!";
    }

    function setMessage(string memory new_message) public {
        message = new_message;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
