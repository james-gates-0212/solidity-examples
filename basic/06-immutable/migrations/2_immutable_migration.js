const Migrations = artifacts.require('Immutable');

module.exports = function (deployer) {
  deployer.deploy(Migrations, 123);
};
