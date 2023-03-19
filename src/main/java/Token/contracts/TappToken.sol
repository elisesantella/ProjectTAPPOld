pragma solidity ^0.4.2;

contract TappToken {
    //Constructor

    //Set Name & Symbol & Standard(NOT ERC-20 Just for my token)
    string public name = "Tapp Token";
    string public symbol = "TAPP";
    string public standard = "Tapp Token v1.0";

    //Set total number of tokens
    //Read the total number of tokens
    uint256 public totalSupply; //Declare variable 

    //Declare Transfer event
    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    //Define Mapping - give key and value (kinda like an array)
    // key is address and value is unsigned int - Map is called balanceOf
    //Default to 0 if not specified in code
    mapping(address => uint256) public balanceOf;

    //Constructor Function
    //Used underscore in initialSupply due to solidity conventions
    function TappToken (uint256 _initialSupply) public {
        //passing key and setting value - msg is a global variable in solidity & sender is the address
        //that called the function 
        //We are setting inital supply to this address 
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply; //Number of tokens avaliable REQUIRED FUNCTION IN ERC-20 STANDARDS GITHUB
        //allocate initial supple
    }

    //Add a Transfer function
    function transfer(address _to, uint256 _value) public returns (bool success) {
         //Trigger and exception if account does not have enough to transfer
         //require means if it is true it will run other false returns an error
         require(balanceOf[msg.sender] >= _value);

         //Transfer the balance from sender and adding to another
         balanceOf[msg.sender] -= _value;
         balanceOf[_to] += _value;

        //Trigger transfer event
        Transfer(msg.sender, _to, _value);

        //Return a boolean 
        return true;

    }

    //***Delegated Transfers (ERC 20)***
    //transferFrom
    //Approved function
    //Approve this account to spend a certain amount of tokens
    function approve(address _spender, uint256 _value) public returns (bool success) {
        //allowance
        //approved event
        return true;

    }

}