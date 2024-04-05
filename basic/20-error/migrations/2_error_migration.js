const ErrorContract = artifacts.require('Error');
const AccountContract = artifacts.require('Account');

module.exports = function (deployer) {
  deployer.deploy(ErrorContract);
  deployer.deploy(AccountContract);
};
