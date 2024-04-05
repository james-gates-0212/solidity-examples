// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "../contracts/Account.sol";

contract TestAccount {
    Account public account;

    function beforeEach() public {
        account = new Account();
    }

    function testDeposit() public {
        account.deposit(100);
        uint256 balance = account.balance();
        Assert.equal(balance, 100, "Incorrect balance after deposit");
    }

    function testWithdraw() public {
        account.deposit(100);
        account.withdraw(50);
        uint256 balance = account.balance();
        Assert.equal(balance, 50, "Incorrect balance after withdrawal");
    }

    function testUnderflow() public {
        try account.withdraw(100) {
            Assert.fail("Underflow should have thrown an error");
        } catch Error(string memory errorMessage) {
            Assert.equal(errorMessage, "Underflow", "Incorrect error message");
        } catch {
            Assert.fail("Unexpected error type");
        }
    }

    function testOverflow() public {
        try account.deposit(0) {
            Assert.fail("Overflow should have thrown an error");
        } catch Error(string memory errorMessage) {
            Assert.equal(errorMessage, "Overflow", "Incorrect error message");
        } catch {
            Assert.fail("Unexpected error type");
        }
    }
}
