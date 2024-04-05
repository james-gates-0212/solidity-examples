// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract DataLocations {
    uint256[] public arr = [1, 2, 3, 4, 5];
    mapping(uint256 => address) map;

    struct MyStruct {
        uint256 foo;
    }

    mapping(uint256 => MyStruct) myStructs;

    function f() public {
        // call _f with state variables
        _f(arr, map, myStructs[1]);

        // get a struct from a mapping
        MyStruct storage myStruct = myStructs[1];
        myStruct.foo += 1;
        // create a struct in memory
        MyStruct memory myMemStruct = MyStruct(0);
        myMemStruct.foo += 1;
    }

    function generateRandomAddress() internal view returns (address) {
        uint256 nonce = 0;
        uint256 randomNum = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, nonce)));
        nonce++;
        return address(uint160(uint256(randomNum)));
    }

    function _f(uint256[] storage _arr, mapping(uint256 => address) storage _map, MyStruct storage _myStruct) internal {
        // do something with storage variables
        for (uint256 i = 0; i < _arr.length; i++) {
            _arr[i] += 1;
            _map[_arr[i]] = generateRandomAddress();
        }
        _myStruct.foo = _arr.length;
    }

    // You can return memory variables
    function g(uint256[] memory _arr) public pure returns (uint256[] memory) {
        for (uint256 i = 0; i < _arr.length; i++) {
            _arr[i] += 1;
        }
        return _arr;
    }

    function h(uint256[] calldata _arr) external pure {
        // do something with calldata array
        assert(_arr.length > 0);
    }
}
