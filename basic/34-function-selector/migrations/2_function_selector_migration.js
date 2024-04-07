const FunctionSelectorContract = artifacts.require('FunctionSelector');

module.exports = function (deployer) {
  deployer.deploy(FunctionSelectorContract);
};
