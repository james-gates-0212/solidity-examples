const Migrations = artifacts.require('Loop');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
