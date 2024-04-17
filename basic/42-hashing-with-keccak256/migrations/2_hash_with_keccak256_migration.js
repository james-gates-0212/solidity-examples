const HashFunctionContract = artifacts.require('HashFunction');
const GuessTheMagicWordContract = artifacts.require('GuessTheMagicWord');

module.exports = function (deployer) {
  deployer.deploy(HashFunctionContract);
  deployer.deploy(GuessTheMagicWordContract);
};
