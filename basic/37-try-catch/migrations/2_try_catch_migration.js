const BarContract = artifacts.require('Bar');
// const FooContract = artifacts.require('Foo');

module.exports = function (deployer) {
  deployer.deploy(BarContract);
  // deployer.deploy(FooContract, 0x0000000000000000000000000000000000000000);
};
