const Migrations = artifacts.require('Variables');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
