// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "../contracts/ShadowingInherits.sol";

contract InheritanceTest {
    C public c;

    function beforeEach() public {
        c = new C();
    }

    function testC() public {
        string memory expected = "Contract C";

        Assert.equal(c.getName(), expected, "Incorrect name in contract C");
    }
}
