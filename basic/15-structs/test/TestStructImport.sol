// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../contracts/StructImport.sol";
import "../contracts/StructDeclaration.sol";

contract TodosImportTest {
    TodosImport public todosImportContract;

    function beforeEach() public {
        todosImportContract = new TodosImport();
    }

    function testTodos() external {
        // Create a new todo
        todosImportContract.push(Todo("Buy groceries", false));

        // Retrieve the todo details
        Todo memory todo = todosImportContract.get()[0];
        assert(bytes(todo.text).length > 0);
        assert(!todo.completed);
    }
}
