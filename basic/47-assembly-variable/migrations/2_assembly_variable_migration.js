const AssemblyVariableContract = artifacts.require('AssemblyVariable');

module.exports = function (deployer) {
  deployer.deploy(AssemblyVariableContract);
};
