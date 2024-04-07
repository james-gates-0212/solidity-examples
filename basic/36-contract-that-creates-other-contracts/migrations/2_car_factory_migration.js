const CarFactoryContract = artifacts.require('CarFactory');

module.exports = function (deployer) {
  deployer.deploy(CarFactoryContract);
};
