const TestMerkleProof = artifacts.require('TestMerkleProof');

contract('TestMerkleProof', (accounts) => {
  it('should verify the Merkle proof', async () => {
    const contractInstance = await TestMerkleProof.deployed();

    const proof = [
      '0x8da9e1c820f9dbd1589fd6585872bc1063588625729e7ab0797cfc63a00bd950',
      '0x995788ffc103b987ad50f5e5707fd094419eb12d9552cc423bd0cd86a3861433',
    ];
    const root = '0xcc086fcc038189b4641db2cc4f1de3bb132aefbd65d510d817591550937818c7';
    const leaf = '0xdca3326ad7e8121bf9cf9c12333e6b2271abe823ec9edfe42f813b1e768fa57b';
    const index = 2;

    const result = await contractInstance.verify(proof, root, leaf, index);
    assert.equal(result, true, 'Merkle proof verification failed');
  });
});
