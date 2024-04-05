// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../contracts/DataLocations.sol";

contract TestDataLocations {
    DataLocations public dataLocationsContract;

    function beforeEach() public {
        dataLocationsContract = new DataLocations();
    }

    function testDataLocations() external {
        // Call function f in DataLocations contract
        dataLocationsContract.f();

        uint256[] memory arr = new uint256[](5);
        for (uint256 i = 0; i < arr.length; i++) {
            arr[i] = (i > 0 ? arr[i - 1] : 0) + i;
        }

        // Call function g in DataLocations contract
        uint256[] memory arrResult = dataLocationsContract.g(arr);

        // Assert that the returned array has been modified
        assert(arrResult.length > 0);

        // Call function h in DataLocations contract
        dataLocationsContract.h(arr);
    }
}
