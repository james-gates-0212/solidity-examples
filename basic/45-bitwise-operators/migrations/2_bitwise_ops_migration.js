const BitwiseOpsContract = artifacts.require('BitwiseOps');

module.exports = function (deployer) {
  deployer.deploy(BitwiseOpsContract);
};
