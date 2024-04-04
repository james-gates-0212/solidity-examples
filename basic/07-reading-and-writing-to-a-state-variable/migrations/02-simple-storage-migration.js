const Migrations = artifacts.require('SimpleStorage');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
