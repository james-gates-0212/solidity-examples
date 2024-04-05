// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract FirstApp {
    uint256 public count;

    constructor() {
        count = 0;
    }

    // Function to get the current count
    function get() public view returns (uint256) {
        return count;
    }

    // Function to increase count by 1
    function inc() public {
        count += 1;
    }

    // Function to decrease count by 1
    function dec() public {
        // This function will fail if count = 0
        count -= 1;
    }
}
