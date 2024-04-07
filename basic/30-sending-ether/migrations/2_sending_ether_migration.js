const ReceiveEtherContract = artifacts.require('ReceiveEther');
const SendEtherContract = artifacts.require('SendEther');

module.exports = function (deployer) {
  deployer.deploy(ReceiveEtherContract);
  deployer.deploy(SendEtherContract);
};
