const PayableContract = artifacts.require('Payable');

module.exports = function (deployer) {
  deployer.deploy(PayableContract);
};
