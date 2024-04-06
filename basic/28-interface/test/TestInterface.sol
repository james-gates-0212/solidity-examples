// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "truffle/Assert.sol";
import "../contracts/Interface.sol";

contract TestInterface {
    MyContract public myContract;
    Counter public counter;

    function beforeEach() public {
        counter = new Counter();
        myContract = new MyContract();
    }

    function testIncrementCounter() public {
        uint256 initialCount = counter.count();
        myContract.incrementCounter(address(counter));
        uint256 newCount = counter.count();

        Assert.equal(newCount, initialCount + 1, "Counter not incremented correctly");
    }

    function testGetCount() public {
        counter.increment();
        uint256 count = myContract.getCount(address(counter));

        Assert.equal(count, counter.count(), "Incorrect count retrieved");
    }
}
