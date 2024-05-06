const CounterV1 = artifacts.require('CounterV1');
const CounterV2 = artifacts.require('CounterV2');
const BuggyProxy = artifacts.require('BuggyProxy');
const Dev = artifacts.require('Dev');
const ProxyAdmin = artifacts.require('ProxyAdmin');
const TestSlot = artifacts.require('TestSlot');

module.exports = function (deployer) {
  deployer.deploy(CounterV1);
  deployer.deploy(CounterV2);
  deployer.deploy(BuggyProxy);
  deployer.deploy(Dev);
  deployer.deploy(ProxyAdmin);
  deployer.deploy(TestSlot);
};
