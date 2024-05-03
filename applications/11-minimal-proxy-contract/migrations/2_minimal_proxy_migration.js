const MinimalProxyContract = artifacts.require('MinimalProxy');

module.exports = function (deployer) {
  deployer.deploy(MinimalProxyContract);
};
