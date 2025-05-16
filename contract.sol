
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract TokenBalanceChecker {
    function getBalance(address token, address user) public view returns (uint256) {
        return IERC20(token).balanceOf(user);
    }
}
