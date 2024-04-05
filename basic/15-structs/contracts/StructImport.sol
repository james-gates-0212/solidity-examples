// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./StructDeclaration.sol";

contract TodosImport {
    // An array of 'Todo' structs
    Todo[] public todos;

    function push(Todo memory todo) public {
        todos.push(todo);
    }

    function get() public view returns (Todo[] memory) {
        return todos;
    }
}
