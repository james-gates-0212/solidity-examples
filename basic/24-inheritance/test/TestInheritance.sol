// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "../contracts/Inheritance.sol";

contract TestInheritance {
    D public d;
    E public e;
    F public f;

    function beforeEach() public {
        d = new D();
        e = new E();
        f = new F();
    }

    function testD() public {
        string memory expected = "C";

        Assert.equal(d.foo(), expected, "Incorrect result in contract D");
    }

    function testE() public {
        string memory expected = "B";

        Assert.equal(e.foo(), expected, "Incorrect result in contract E");
    }

    function testF() public {
        string memory expected = "B";

        Assert.equal(f.foo(), expected, "Incorrect result in contract F");
    }
}
