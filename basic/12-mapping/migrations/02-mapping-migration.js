const MappingMigration = artifacts.require('Mapping');
const NestedMappingMigration = artifacts.require('NestedMapping');

module.exports = function (deployer) {
  deployer.deploy(MappingMigration);
  deployer.deploy(NestedMappingMigration);
};
