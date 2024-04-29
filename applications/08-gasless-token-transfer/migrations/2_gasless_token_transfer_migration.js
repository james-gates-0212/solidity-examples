const GaslessTokenTransferContract = artifacts.require('GaslessTokenTransfer');

module.exports = function (deployer) {
  deployer.deploy(GaslessTokenTransferContract);
};
