// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../contracts/Enum.sol";

contract TestEnum {
    Enum public enumContract;

    function beforeEach() public {
        enumContract = new Enum();
    }

    function testEnum() external {
        // Initial status should be "Pending"
        Enum.Status initialStatus = enumContract.get();
        assert(initialStatus == Enum.Status.Pending);

        // Update status to "Shipped"
        enumContract.set(Enum.Status.Shipped);
        Enum.Status updatedStatus = enumContract.get();
        assert(updatedStatus == Enum.Status.Shipped);

        // Update status to "Canceled"
        enumContract.cancel();
        Enum.Status canceledStatus = enumContract.get();
        assert(canceledStatus == Enum.Status.Canceled);

        // Reset status to default value ("Pending")
        enumContract.reset();
        Enum.Status resetStatus = enumContract.get();
        assert(resetStatus == Enum.Status.Pending);
    }
}
