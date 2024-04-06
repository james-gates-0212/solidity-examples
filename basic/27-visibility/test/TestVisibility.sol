// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "../contracts/Visibility.sol";

contract TestVisibility {
    Base public base;
    Child public child;

    function beforeEach() public {
        base = new Base();
        child = new Child();
    }

    function testPrivateFunc() external {
        string memory expected = "private function called";

        Assert.equal(base.testPrivateFunc(), expected, "Incorrect result in Base contract");
    }

    function testInternalFunc() external {
        string memory expected = "internal function called";

        Assert.equal(base.testInternalFunc(), expected, "Incorrect result in Base contract");
        Assert.equal(child.testInternalFunc(), expected, "Incorrect result in Child contract");
    }

    function testPublicFunc() external {
        string memory expected = "public function called";

        Assert.equal(base.publicFunc(), expected, "Incorrect result in Base contract");
        Assert.equal(child.publicFunc(), expected, "Incorrect result in Child contract");
    }

    function testExternalFunc() external {
        string memory expected = "external function called";

        Assert.equal(base.externalFunc(), expected, "Incorrect result in Base contract");
        // This will not compile since external functions can only be called by other contracts and accounts.
        // Assert.equal(child.externalFunc(), expected, "Incorrect result in Child contract");
    }
}
