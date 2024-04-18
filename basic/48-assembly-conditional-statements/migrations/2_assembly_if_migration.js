const AssemblyIfContract = artifacts.require('AssemblyIf');

module.exports = function (deployer) {
  deployer.deploy(AssemblyIfContract);
};
