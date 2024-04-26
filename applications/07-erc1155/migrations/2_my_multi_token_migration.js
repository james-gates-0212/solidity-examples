const MyMultiTokenContract = artifacts.require('MyMultiToken');

module.exports = function (deployer) {
  deployer.deploy(MyMultiTokenContract);
};
