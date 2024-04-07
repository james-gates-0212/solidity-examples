// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "truffle/Assert.sol";
import "../contracts/Payable.sol";

contract TestPayable {
    Payable public payableContract;

    function beforeEach() public {
        payableContract = new Payable();
    }

    function testDeposit() public {
        uint256 initialBalance = address(payableContract).balance;
        payableContract.deposit{value: 2 ether}();
        uint256 newBalance = address(payableContract).balance;

        Assert.equal(newBalance, initialBalance + 2 ether, "Ether not deposited correctly");
    }

    function testWithdraw() public {
        payableContract.withdraw();
        uint256 newBalance = address(payableContract.owner()).balance;

        Assert.equal(newBalance, 0, "Ether not withdrawn correctly");
    }

    function testTransfer() public {
        uint256 initialBalance = address(payableContract).balance;

        Payable recipient = new Payable();
        payableContract.transfer(recipient.owner(), 1 ether);

        uint256 recipientBalance = address(recipient).balance;
        uint256 newBalance = address(payableContract).balance;

        Assert.equal(recipientBalance, 1 ether, "Ether not transferred correctly");
        Assert.equal(newBalance, initialBalance - 1 ether, "Ether not deducted from sender correctly");
    }

    function testNotPayable() public {
        bool success;
        (success, ) = address(payableContract).call(abi.encodeWithSignature("notPayable()"));
        Assert.isTrue(success, "Function marked as not payable should revert");
    }
}
