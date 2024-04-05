// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "../contracts/Function.sol";

contract TestFunction {
    Function public functionContract;
    XYZ public xyzContract;

    function beforeEach() public {
        functionContract = new Function();
        xyzContract = new XYZ();
    }

    function testReturnMany() public {
        (uint256 a, bool b, uint256 c) = functionContract.returnMany();
        Assert.equal(a, 1, "Incorrect value for a");
        Assert.equal(b, true, "Incorrect value for b");
        Assert.equal(c, 2, "Incorrect value for c");
    }

    function testNamed() public {
        (uint256 a, bool b, uint256 c) = functionContract.named();
        Assert.equal(a, 1, "Incorrect value for a");
        Assert.equal(b, true, "Incorrect value for b");
        Assert.equal(c, 2, "Incorrect value for c");
    }

    function testAssigned() public {
        (uint256 a, bool b, uint256 c) = functionContract.assigned();
        Assert.equal(a, 1, "Incorrect value for a");
        Assert.equal(b, true, "Incorrect value for b");
        Assert.equal(c, 2, "Incorrect value for c");
    }

    function testDestructuringAssignments() public {
        (uint256 a, bool b, uint256 c, uint256 x, uint256 y) = functionContract.destructuringAssignments();
        Assert.equal(a, 1, "Incorrect value for a");
        Assert.equal(b, true, "Incorrect value for b");
        Assert.equal(c, 2, "Incorrect value for c");
        Assert.equal(x, 4, "Incorrect value for x");
        Assert.equal(y, 6, "Incorrect value for y");
    }

    function testArrayInput() public {
        uint256[] memory arr = new uint256[](3);
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 3;

        functionContract.arrayInput(arr);
    }

    function testArrayOutput() public {
        uint256[] memory arr = functionContract.arrayOutput();
        Assert.equal(arr.length, 0, "Array length should be 0");
    }

    function testSomeFuncWithManyInputs() public {
        uint256 result = xyzContract.someFuncWithManyInputs(1, 2, 3, address(0), true, "c");
        Assert.equal(result, 6, "Incorrect result");
    }

    function testCallFunc() public {
        uint256 result = xyzContract.callFunc();
        Assert.equal(result, 6, "Incorrect result");
    }

    function testCallFuncWithKeyValue() public {
        uint256 result = xyzContract.callFuncWithKeyValue();
        Assert.equal(result, 6, "Incorrect result");
    }
}
