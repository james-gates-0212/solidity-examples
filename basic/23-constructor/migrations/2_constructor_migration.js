const XContract = artifacts.require('X');
const YContract = artifacts.require('Y');
const BContract = artifacts.require('B');
const CContract = artifacts.require('C');
const DContract = artifacts.require('D');
const EContract = artifacts.require('E');

module.exports = function (deployer) {
  deployer.deploy(XContract, 'Hello X');
  deployer.deploy(YContract, 'Hello Y');
  deployer.deploy(BContract);
  deployer.deploy(CContract, 'Hello X', 'Hello Y');
  deployer.deploy(DContract);
  deployer.deploy(EContract);
};
