const FallbackContract = artifacts.require('Fallback');
const SendToFallbackContract = artifacts.require('SendToFallback');
const FallbackInputOutputContract = artifacts.require('FallbackInputOutput');
const CounterContract = artifacts.require('Counter');
const TestFallbackInputOutputContract = artifacts.require('TestFallbackInputOutput');

module.exports = function (deployer) {
  deployer.deploy(FallbackContract);
  deployer.deploy(SendToFallbackContract);
  // deployer.deploy(FallbackInputOutputContract);
  deployer.deploy(CounterContract);
  deployer.deploy(TestFallbackInputOutputContract);
};
