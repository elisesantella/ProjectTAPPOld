App = {
    web3Provider: null,
    contracts: {},
    account: '0x0',
    loading: false,
    tokenPrice: 1000000000000000,
    tokenSold: 0,
    tokenAvailable: 750000,

    init: function() {
        console.log("App initialised...")
        return App.initWeb3();
    },

    initWeb3: function() {
    if (typeof web3 !== 'undefined') {
        // If a web3 instance is already provided by Meta Mask.
        App.web3Provider = web3.currentProvider;
        web3 = new Web3(web3.currentProvider);
        } else {
        // Specify default instance if no web3 instance provided
        App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        web3 = new Web3(App.web3Provider);
        }
        return App.initContracts();
    },
        initContracts: function() {
            $.getJSON("TappTokenSale.json", function(TappTokenSale) {
                App.contracts.TappTokenSale = TruffleContract(TappTokenSale);
                App.contracts.TappTokenSale.setProvider(App.web3Provider);
                App.contracts.TappTokenSale.deployed().then(function(TappTokenSale) {
                    console.log("Tapp Token Sale address: ", TappTokenSale.address);
                });
                }).done(function() {
                    $.getJSON("TappToken.json", function(TappToken) {
                      App.contracts.TappToken = TruffleContract(TappToken);
                      App.contracts.TappToken.setProvider(App.web3Provider);
                      App.contracts.TappToken.deployed().then(function(TappToken) {
                        console.log("Tapp Token Address:", TappToken.address);
                      });
                      App.listenForEvents();
                      return App.render();
                  });
                })
        },

        listenForEvents:function() {
            App.contracts.TappTokenSale.deployed().then(function(instance) {
                instance.Sell({}, {
                    fromBlock: 0,
                    toBlock: 'latest',
                }).watch(function(error, event) {
                    console.log("event triggered", event);
                    App.render();
                })
            })
        },

        render: function() {
            if (App.loading) {
                return;
            }
            App.loading = true;

            var loader = $('#loader');
            var content = $('#content');
            
            loader.show();
            content.hide();

            //load account data
            web3.eth.getCoinbase(function(err, account) {
                if(err === null) {
                    console.log("account", account);
                  App.account = account;
                  //Have to make sure that metamask is connected online
                  $('#accountAddress').html("Your Account: " + account);
                }
              })


            //Call the token sale contract to get the price for website
            App.contracts.TappTokenSale.deployed().then(function(instance) {
                tappTokenSaleInstance = instance;
                return tappTokenSaleInstance.tokenPrice();
            }).then(function(tokenPrice) {
                App.tokenPrice = tokenPrice;
                //web3 function converts wei to ether amount
                $('.token-price').html(web3.fromWei(App.tokenPrice, "ether").toNumber());
                //how many tokens sold
                return tappTokenSaleInstance.tokenSold();
            }).then(function(tokenSold) {
                App.tokenSold = tokenSold.toNumber();
                $('.tokens-sold').html(App.tokenSold);
                $('.tokens-available').html(App.tokenAvailable);

                //loader
                var progressPercent = (Math.ceil(App.tokenSold) / App.tokenAvailable) * 100;
                $('#progress').css('width', progressPercent + '%');

                //load token contract to check balance
                App.contracts.TappToken.deployed().then(function(instance) {
                    tappTokenInstance = instance;
                    return tappTokenInstance.balanceOf(App.account);
                }).then(function(balance) {
                    $('.tapp-balance').html(balance.toNumber());

                    App.loading = false;
                    loader.hide();
                    content.show();
                })
            });
            
        },

        buyTokens: function() {
            $('#content').hide();
            $('#loader').show();
            var numberOfToken = $('#numberOfToken').val();
            App.contracts.TappTokenSale.deployed().then(function(instance) {
                return instance. buyTokens(numberOfToken, {
                    from: App.account,
                    value: numberOfToken * App.tokenPrice,
                    gas: 500000
                });
            }).then(function(result) {
                console.log("Tokens bought...")
                $('form').trigger('reset')
               //Wait for Sell event
            });
        }
}

$(function() {
    $(window).load(function() {
        App.init();
    })
});