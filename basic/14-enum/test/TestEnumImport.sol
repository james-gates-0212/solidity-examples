// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../contracts/EnumImport.sol";
import "../contracts/EnumDeclaration.sol";

contract TestEnumImport {
    EnumImport public enumImportContract;

    function beforeEach() public {
        enumImportContract = new EnumImport();
    }

    function testEnumImport() external {
        // Initial status should be "Pending"
        Status initialStatus = enumImportContract.status();
        assert(initialStatus == Status.Pending);
    }
}
