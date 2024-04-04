const Migrations = artifacts.require('IfElse');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
