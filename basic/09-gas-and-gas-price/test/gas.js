const GasContract = artifacts.require('Gas');

contract('Gas', (accounts) => {
  let contractInstance;

  before(async () => {
    contractInstance = await GasContract.deployed();
  });

  it('looping 1000 times', async () => {
    await contractInstance.looping(1000);

    const value = await contractInstance.i();

    assert.equal(value, 1000);
  });
});
