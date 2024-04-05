const DataLocations = artifacts.require('DataLocations');

module.exports = function (deployer) {
  deployer.deploy(DataLocations);
};
