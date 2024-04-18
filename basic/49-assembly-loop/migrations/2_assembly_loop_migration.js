const AssemblyLoopContract = artifacts.require('AssemblyLoop');

module.exports = function (deployer) {
  deployer.deploy(AssemblyLoopContract);
};
