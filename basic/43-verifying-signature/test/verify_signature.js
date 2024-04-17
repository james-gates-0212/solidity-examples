// Import the contract artifacts and the necessary modules
const VerifySignature = artifacts.require('VerifySignature');

contract('VerifySignature', (accounts) => {
  let verifySignature;

  before(async () => {
    verifySignature = await VerifySignature.deployed();
  });

  it('should verify the signature correctly', async () => {
    const signer = '0xB273216C05A8c0D4F0a4Dd0d7Bae1D2EfFE636dd';
    const to = '0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C';
    const amount = 123;
    const message = 'coffee and donuts';
    const nonce = 1;
    const signature =
      '0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b';

    const result = await verifySignature.verify(signer, to, amount, message, nonce, signature);
    assert.equal(result, true, 'Signature verification failed');
  });
});
