const CounterContract = artifacts.require('Counter');
const MyContractContract = artifacts.require('MyContract');
const UniswapExampleContract = artifacts.require('UniswapExample');

module.exports = function (deployer) {
  deployer.deploy(CounterContract);
  deployer.deploy(MyContractContract);
  deployer.deploy(UniswapExampleContract);
};
