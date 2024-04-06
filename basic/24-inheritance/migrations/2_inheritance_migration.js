const AContract = artifacts.require('A');
const BContract = artifacts.require('B');
const CContract = artifacts.require('C');
const DContract = artifacts.require('D');
const EContract = artifacts.require('E');

module.exports = function (deployer) {
  deployer.deploy(AContract);
  deployer.deploy(BContract);
  deployer.deploy(CContract);
  deployer.deploy(DContract);
  deployer.deploy(EContract);
};
