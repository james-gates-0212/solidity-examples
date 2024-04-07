const CalleeContract = artifacts.require('Callee');
const CallerContract = artifacts.require('Caller');

module.exports = function (deployer) {
  deployer.deploy(CalleeContract);
  deployer.deploy(CallerContract);
};
