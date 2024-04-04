const SimpleStorageContract = artifacts.require('SimpleStorage');

contract('Simple Storage', (accounts) => {
  let contractInstance;

  before(async () => {
    contractInstance = await SimpleStorageContract.deployed();
  });

  it('writing to a state variable', async () => {
    await contractInstance.set(123);
  });

  it('reading from a state variable', async () => {
    const value = await contractInstance.get();

    assert.equal(value, 123);
  });
});
