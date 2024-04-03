const Migrations = artifacts.require('HelloWorld');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
