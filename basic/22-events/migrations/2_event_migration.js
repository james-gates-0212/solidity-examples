const EventContract = artifacts.require('Event');

module.exports = function (deployer) {
  deployer.deploy(EventContract);
};
