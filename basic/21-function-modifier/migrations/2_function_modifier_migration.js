const FunctionModifierContract = artifacts.require('FunctionModifier');

module.exports = function (deployer) {
  deployer.deploy(FunctionModifierContract);
};
