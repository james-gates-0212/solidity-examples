const Proxy = artifacts.require('Proxy');
const TestContract1 = artifacts.require('TestContract1');
const TestContract2 = artifacts.require('TestContract2');
const Helper = artifacts.require('Helper');

module.exports = function (deployer) {
  deployer.deploy(Proxy);
  deployer.deploy(TestContract1);
  deployer.deploy(TestContract2, 10, 20);
  deployer.deploy(Helper);
};
