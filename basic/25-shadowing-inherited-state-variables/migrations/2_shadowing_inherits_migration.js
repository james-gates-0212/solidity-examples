const AContract = artifacts.require('A');
const CContract = artifacts.require('C');

module.exports = function (deployer) {
  deployer.deploy(AContract);
  deployer.deploy(CContract);
};
