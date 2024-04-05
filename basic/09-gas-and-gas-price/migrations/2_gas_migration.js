const Migrations = artifacts.require('Gas');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
