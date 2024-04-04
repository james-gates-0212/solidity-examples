const ArrayMigration = artifacts.require('Array');
const ArrayRemoveByShiftingMigration = artifacts.require('ArrayRemoveByShifting');
const ArrayReplaceFromEndMigration = artifacts.require('ArrayReplaceFromEnd');

module.exports = function (deployer) {
  deployer.deploy(ArrayMigration);
  deployer.deploy(ArrayRemoveByShiftingMigration);
  deployer.deploy(ArrayReplaceFromEndMigration);
};
