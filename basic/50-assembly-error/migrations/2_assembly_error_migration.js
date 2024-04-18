const AssemblyErrorContract = artifacts.require('AssemblyError');

module.exports = function (deployer) {
  deployer.deploy(AssemblyErrorContract);
};
