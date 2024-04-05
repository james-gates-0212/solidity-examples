// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "../contracts/Error.sol";

contract TestError {
    Error public errorContract;

    function beforeEach() public {
        errorContract = new Error();
    }

    function testRequire() public {
        try errorContract.testRequire(5) {
            Assert.fail("Require should have thrown an error");
        } catch Error(string memory errorMessage) {
            Assert.equal(errorMessage, "Input must be greater than 10", "Incorrect error message");
        } catch {
            Assert.fail("Unexpected error type");
        }
    }

    function testRevert() public {
        try errorContract.testRevert(5) {
            Assert.fail("Revert should have thrown an error");
        } catch Error(string memory errorMessage) {
            Assert.equal(errorMessage, "Input must be greater than 10", "Incorrect error message");
        } catch {
            Assert.fail("Unexpected error type");
        }
    }

    function testAssert() public {
        try errorContract.testAssert() {
            Assert.fail("Assert should have thrown an error");
        } catch Error(string memory) {
            Assert.fail("Unexpected error type");
        } catch Panic(uint reason) {
            Assert.equal(reason, 0x01, "Incorrect error message");
        } catch {
            Assert.fail("Unexpected error type");
        }
    }

    function testCustomError() public {
        try errorContract.testCustomError(1000 ether) {
            Assert.fail("Custom error should have been reverted");
        } catch Error(string memory) {
            Assert.fail("Unexpected error type");
        } catch (bytes memory reason) {
            bytes4 expectedSelector = Error.InsufficientBalance.selector;
            bytes4 receivedSelector = bytes4(reason);
            Assert.equal(expectedSelector, receivedSelector, "Incorrect error message");
        }
    }
}
