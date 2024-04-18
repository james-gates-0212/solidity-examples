const AssemblyMathContract = artifacts.require('AssemblyMath');

module.exports = function (deployer) {
  deployer.deploy(AssemblyMathContract);
};
