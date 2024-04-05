const CallbackContract = artifacts.require('Callback');

module.exports = function (deployer) {
  deployer.deploy(CallbackContract);
};
