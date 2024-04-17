const UncheckedMathContract = artifacts.require('UncheckedMath');

module.exports = function (deployer) {
  deployer.deploy(UncheckedMathContract);
};
