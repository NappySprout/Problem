// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
//just an interface
abstract contract Token {
  function balanceOf(address) public virtual view returns (uint);
}

contract Utility {
    function getBalances(address user, address[] memory tokens) external view returns (address[] memory, uint[] memory) {
        uint[] memory tokenBalances = new uint[](tokens.length);
        for(uint i = 0; i < tokens.length; i++) {
            tokenBalances[i] = Token(tokens[i]).balanceOf(user);
        }
        return (tokens, tokenBalances);
    }
} 

