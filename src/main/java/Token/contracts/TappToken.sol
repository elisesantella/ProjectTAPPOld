pragma solidity ^0.4.2;

contract TappToken {
    //Constructor
    //Set total number of tokens
    //Read the total number of tokens

    uint256 public totalSupply; //Declare variable 

    function TappToken () public {
        totalSupply = 1000000; //Number of tokens avaliable REQUIRED FUNCTION IN ERC-20 STANDARDS GITHUB

    }

}