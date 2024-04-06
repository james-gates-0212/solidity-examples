const BaseContract = artifacts.require('Base');
const ChildContract = artifacts.require('Child');

module.exports = function (deployer) {
  deployer.deploy(BaseContract);
  deployer.deploy(ChildContract);
};
