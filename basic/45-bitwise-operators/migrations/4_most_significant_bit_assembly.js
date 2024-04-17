const MostSignificantBitAssemblyContract = artifacts.require('MostSignificantBitAssembly');

module.exports = function (deployer) {
  deployer.deploy(MostSignificantBitAssemblyContract);
};
