const ReceiverContract = artifacts.require('Receiver');
const CallerContract = artifacts.require('Caller');

module.exports = function (deployer) {
  deployer.deploy(ReceiverContract);
  deployer.deploy(CallerContract);
};
