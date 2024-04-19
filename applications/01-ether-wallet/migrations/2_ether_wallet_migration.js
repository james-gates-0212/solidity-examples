const EtherWalletContract = artifacts.require('EtherWallet');

module.exports = function (deployer) {
  deployer.deploy(EtherWalletContract);
};
