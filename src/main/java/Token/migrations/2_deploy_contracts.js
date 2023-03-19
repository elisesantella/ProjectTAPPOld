var TappToken = artifacts.require("./TappToken.sol");  //Reading file from contracts

module.exports = function(deployer) {
    //Passing the amount into the TappToken contract to initialise _initialSupply
    deployer.deploy(TappToken, 1000000); //sets variable above using artifacts which allows us to run contract
};