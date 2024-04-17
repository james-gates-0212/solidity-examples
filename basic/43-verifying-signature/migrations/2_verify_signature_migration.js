const VerifySignatureContract = artifacts.require('VerifySignature');

module.exports = function (deployer) {
  deployer.deploy(VerifySignatureContract);
};
