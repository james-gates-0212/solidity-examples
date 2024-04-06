const AContract = artifacts.require('A');
const BContract = artifacts.require('B');
const CContract = artifacts.require('C');
const DContract = artifacts.require('D');

module.exports = function (deployer) {
  deployer.deploy(AContract);
  deployer.deploy(BContract);
  deployer.deploy(CContract);
  deployer.deploy(DContract);
};
