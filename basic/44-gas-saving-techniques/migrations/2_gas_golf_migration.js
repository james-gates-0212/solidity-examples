const GasGolfContract = artifacts.require('GasGolf');

module.exports = function (deployer) {
  deployer.deploy(GasGolfContract);
};
