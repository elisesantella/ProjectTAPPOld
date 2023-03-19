var TappToken = artifacts.require("./TappToken.sol");  //Reading file from contracts

module.exports = function(deployer) {
    deployer.deploy(TappToken); //sets variable above using artifacts which allows us to run contract
};