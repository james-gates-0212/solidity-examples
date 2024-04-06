// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../contracts/CallingParentContracts.sol";

contract TestCallingParentContracts {
    D public contractInstance;

    function beforeEach() public {
        contractInstance = new D();
    }

    function testCallingParentContracts() public {
        contractInstance.foo();
        contractInstance.bar();
    }
}
