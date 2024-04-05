const Migrations = artifacts.require('PrimaryDataTypes');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
