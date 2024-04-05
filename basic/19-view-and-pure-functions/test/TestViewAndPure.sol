// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "../contracts/ViewAndPure.sol";

contract TestViewAndPure {
    ViewAndPure public contractInstance;

    function beforeEach() public {
        contractInstance = new ViewAndPure();
    }

    function testAddToX() external {
        uint256 result = contractInstance.addToX(100);
        Assert.equal(result, 101, "Incorrect result");
    }

    function testAdd() external {
        uint256 result = contractInstance.add(1, 2);
        Assert.equal(result, 3, "Incorrect result");
    }
}
