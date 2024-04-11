const MathLibrary = artifacts.require('Math');
const TestMathContract = artifacts.require('TestMath');
const ArrayLibrary = artifacts.require('Array');
const TestArrayContract = artifacts.require('TestArray');

module.exports = function (deployer) {
  deployer.deploy(MathLibrary);
  deployer.link(MathLibrary, TestMathContract);
  deployer.deploy(TestMathContract);
  deployer.deploy(ArrayLibrary);
  deployer.link(ArrayLibrary, TestArrayContract);
  deployer.deploy(TestArrayContract);
};
