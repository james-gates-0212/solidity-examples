const Migrations = artifacts.require('EtherUnits');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
