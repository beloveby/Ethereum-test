var Web3 = require('web3'); // gets the Web3 object, which is a function constructor
var web3 = new Web3(); // instantiate Web3 to get a new object

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.getAccounts()
  .then(function (accounts) {
    console.log(JSON.stringify(accounts, null, 2));
    return accounts;
  })
  .then(function (accounts) {
    var firstAccount = accounts[0];
    return web3.eth.getBalance(firstAccount);
  })
  .then(function (accountBalance) {
    console.log('balance in wei: ', accountBalance);
    console.log('balance in ether: ', web3.utils.fromWei(accountBalance, 'ether'));
    return accountBalance;
  })
  .catch(function (error) {
    console.error(error);
  });