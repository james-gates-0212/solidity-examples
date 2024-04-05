// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../contracts/Structs.sol";

contract TestTodos {
    Todos public todosContract;

    function beforeEach() public {
        todosContract = new Todos();
    }

    function testTodos() external {
        // Create a new todo
        todosContract.create("Buy groceries");

        // Retrieve the todo details
        (string memory text, bool completed) = todosContract.get(0);
        assert(bytes(text).length > 0);
        assert(!completed);

        // Update the todo text
        todosContract.updateText(0, "Buy clothes");

        // Retrieve the updated todo details
        (text, completed) = todosContract.get(0);
        assert(keccak256(bytes(text)) == keccak256("Buy clothes"));

        // Toggle the completed status of the todo
        todosContract.toggleCompleted(0);

        // Retrieve the updated todo details
        (text, completed) = todosContract.get(0);
        assert(completed);
    }
}
