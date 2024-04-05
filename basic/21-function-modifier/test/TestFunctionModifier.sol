// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "../contracts/FunctionModifier.sol";

contract TestFunctionModifier {
    FunctionModifier public functionModifier;

    function beforeEach() public {
        functionModifier = new FunctionModifier();
    }

    function testChangeOwner() public {
        address newOwner = address(0x123);
        functionModifier.changeOwner(newOwner);
        address owner = functionModifier.owner();
        Assert.equal(owner, newOwner, "Incorrect owner after change");
    }

    function testChangeOwnerNotOwner() public {
        address newOwner = address(0x123);
        functionModifier.changeOwner(newOwner);
        try functionModifier.changeOwner(newOwner) {
            Assert.fail("Change owner should have thrown an error");
        } catch Error(string memory errorMessage) {
            Assert.equal(errorMessage, "Not owner", "Incorrect error message");
        } catch {
            Assert.fail("Unexpected error type");
        }
    }

    function testChangeOwnerInvalidAddress() public {
        address newOwner = address(0);
        try functionModifier.changeOwner(newOwner) {
            Assert.fail("Change owner should have thrown an error");
        } catch Error(string memory errorMessage) {
            Assert.equal(errorMessage, "Not valid address", "Incorrect error message");
        } catch {
            Assert.fail("Unexpected error type");
        }
    }

    function testDecrement() public {
        functionModifier.decrement(1);
        uint256 x = functionModifier.x();
        Assert.equal(x, 9, "Incorrect value of x after decrement");
    }

    function testDecrementReentrancy() public {
        try functionModifier.decrement(10) {
            Assert.fail("Decrement should have thrown an error");
        } catch Error(string memory errorMessage) {
            Assert.equal(errorMessage, "No reentrancy", "Incorrect error message");
        } catch {
            Assert.fail("Unexpected error type");
        }
    }
}
