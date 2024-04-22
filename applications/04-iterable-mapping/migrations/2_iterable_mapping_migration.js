const IterableMappingContract = artifacts.require('IterableMapping');
const TestIterableMappingContract = artifacts.require('TestIterableMap');

module.exports = function (deployer) {
  deployer.deploy(IterableMappingContract);
  deployer.link(IterableMappingContract, TestIterableMappingContract);
  deployer.deploy(TestIterableMappingContract);
};
