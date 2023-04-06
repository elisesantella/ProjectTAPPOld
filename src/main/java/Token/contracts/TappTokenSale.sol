pragma solidity ^0.4.2;

import "./TappToken.sol";

contract TappTokenSale {
    address admin; //admin is not public - don't want people to know who the sender is 
    TappToken public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokenSold;

    //declare seller event
    event Sell(address _buyer, uint256 _amount);

    function TappTokenSale(TappToken _tokenContract, uint256 _tokenPrice) public {
        //Assign an admin - will be able to end token sale 
        admin = msg.sender;
         //Assign token contract to allow for purchasing of tokens
        tokenContract = _tokenContract;
         //Set token price - how much eth it costs to buy token
        tokenPrice = _tokenPrice;
    }

    //Buy tokens, pass in number of tokens they want, payable so can send it in ether??
    function buyTokens(uint256 _numberOfTokens) public payable {
        //Require that price number of tokens are the same as token price 
        require(msg.value == _numberOfTokens * tokenPrice);
        //Require that there are enough tokens in the contract 
        //Require transfer is successful
        //Keep track of number of tokens sold
        tokenSold += _numberOfTokens;
        //Trigger Seller Event
        Sell(msg.sender, _numberOfTokens);
    }



}