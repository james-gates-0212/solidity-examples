const MerkleProofContract = artifacts.require('MerkleProof');
const TestMerkleProofContract = artifacts.require('TestMerkleProof');

module.exports = function (deployer) {
  deployer.deploy(MerkleProofContract);
  deployer.deploy(TestMerkleProofContract);
};
