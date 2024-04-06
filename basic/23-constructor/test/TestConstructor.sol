// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "../contracts/Constructor.sol";

contract TestConstructor {
    B public b;
    C public c;
    D public d;
    E public e;

    function beforeEach() public {
        b = new B();
        c = new C("Name for X", "Text for Y");
        d = new D();
        e = new E();
    }

    function testB() public {
        string memory expectedName = "Input to X";
        string memory expectedText = "Input to Y";

        Assert.equal(b.name(), expectedName, "Incorrect name in contract B");
        Assert.equal(b.text(), expectedText, "Incorrect text in contract B");
    }

    function testC() public {
        string memory expectedName = "Name for X";
        string memory expectedText = "Text for Y";

        Assert.equal(c.name(), expectedName, "Incorrect name in contract C");
        Assert.equal(c.text(), expectedText, "Incorrect text in contract C");
    }

    function testD() public {
        string memory expectedName = "X was called";
        string memory expectedText = "Y was called";

        Assert.equal(d.name(), expectedName, "Incorrect name in contract D");
        Assert.equal(d.text(), expectedText, "Incorrect text in contract D");
    }

    function testE() public {
        string memory expectedName = "X was called";
        string memory expectedText = "Y was called";

        Assert.equal(e.name(), expectedName, "Incorrect name in contract E");
        Assert.equal(e.text(), expectedText, "Incorrect text in contract E");
    }
}
