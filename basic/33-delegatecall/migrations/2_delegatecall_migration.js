const AContract = artifacts.require('A');
const BContract = artifacts.require('B');

module.exports = function (deployer) {
  deployer.deploy(AContract);
  deployer.deploy(BContract);
};
