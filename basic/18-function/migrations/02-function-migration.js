const FunctionContract = artifacts.require('Function');
const XYZContract = artifacts.require('XYZ');

module.exports = function (deployer) {
  deployer.deploy(FunctionContract);
  deployer.deploy(XYZContract);
};
