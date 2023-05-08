var TappToken = artifacts.require("./TappToken.sol");  //Reading file from contracts
var TappTokenSale = artifacts.require("./TappTokenSale.sol");  //Reading file from contracts

//Update blockchain & deploy contracts

module.exports = function(deployer) {
    //Passing the amount into the TappToken contract to initialise _initialSupply
    deployer.deploy(TappToken, 1000000).then(function() {
        //token price is 0.001 ether
        var tokenPrice = 1000000000000000;
        return deployer.deploy(TappTokenSale, TappToken.address, tokenPrice);
    }); //sets variable above using artifacts which allows us to run contract
};