const AbiDecodeContract = artifacts.require('AbiDecode');

module.exports = function (deployer) {
  deployer.deploy(AbiDecodeContract);
};
