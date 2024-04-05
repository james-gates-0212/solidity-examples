const EnumMigration = artifacts.require('Enum');
const EnumImportMigration = artifacts.require('EnumImport');

module.exports = function (deployer) {
  deployer.deploy(EnumMigration);
  deployer.deploy(EnumImportMigration);
};
