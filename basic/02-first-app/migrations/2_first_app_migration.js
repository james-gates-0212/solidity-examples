const Migrations = artifacts.require('FirstApp');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
