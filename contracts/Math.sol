//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.5;

import "hardhat/console.sol";

contract Math {
  uint public x;

  constructor(uint _x) {
    x = _x;
  }

  function changeNumTo(uint y) public {
    x = y;
  }

  function doubleX() public {
    x = x * 2;
  }
}
