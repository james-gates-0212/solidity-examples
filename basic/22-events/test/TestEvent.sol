// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../contracts/Event.sol";

contract TestEvent {
    Event public eventContract;

    function beforeEach() public {
        eventContract = new Event();
    }

    function testEvent() public {
        // Call the test function that emits the event
        eventContract.test();
    }
}
