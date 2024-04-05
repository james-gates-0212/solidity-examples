const Migrations = artifacts.require('Constants');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
