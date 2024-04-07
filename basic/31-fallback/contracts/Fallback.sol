// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * fallback is a special function that is executed either when
 * - a function that does not exist is called or
 * - Ether is sent directly to a contract but receive() does not exist or msg.data is not empty
 * fallback has a 2300 gas limit when called by transfer or send.
 */
contract Fallback {
    event Log(string func, uint256 gas);

    // Fallback function must be declared as external.
    fallback() external payable {
        // send / transfer (forwards 2300 gas to this fallback function)
        // call (forwards all of the gas)
        emit Log("fallback", gasleft());
    }

    // Receive is a variant of fallback that is triggered when msg.data is empty
    receive() external payable {
        emit Log("receive", gasleft());
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}

contract SendToFallback {
    function transferToFallback(address payable _to) public payable {
        _to.transfer(msg.value);
    }

    function callFallback(address payable _to) public payable {
        (bool sent, ) = _to.call{value: msg.value}("abc");
        require(sent, "Failed to send Ether");
    }
}
