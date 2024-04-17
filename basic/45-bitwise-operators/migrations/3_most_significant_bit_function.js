const MostSignificantBitFunctionContract = artifacts.require('MostSignificantBitFunction');

module.exports = function (deployer) {
  deployer.deploy(MostSignificantBitFunctionContract);
};
