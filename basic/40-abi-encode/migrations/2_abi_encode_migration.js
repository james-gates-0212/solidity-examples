const AbiEncodeContract = artifacts.require('AbiEncode');

module.exports = function (deployer) {
  deployer.deploy(AbiEncodeContract);
};
