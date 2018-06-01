/* eslint no-undef: "off" */
var Bitney = artifacts.require('Bitney');
var BTNBurnableToken = artifacts.require('BTNBurnableToken');

contract('Bitney', function (accounts) {
  var helpfulFunctions = require('./utils/BitneyUtils')(Bitney, accounts);
  var hfn = Object.keys(helpfulFunctions);
  for (var i = 0; i < hfn.length; i++) {
    global[hfn[i]] = helpfulFunctions[hfn[i]];
  }
  //console.log(global);   
  checksTotalSupply(100000000000000);
  checksName("Bitney");
  checksSymbol("BTN");
 
});



contract('BTNBurnableToken',function(accounts){
    var helpfulFunctions = require('./utils/BitneyUtils')(BTNBurnableToken, accounts);
    var hfn = Object.keys(helpfulFunctions);
    for (var i = 0; i < hfn.length; i++) {
      global[hfn[i]] = helpfulFunctions[hfn[i]];
    }
    checksBurn();
})
