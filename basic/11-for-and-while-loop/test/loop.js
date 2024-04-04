const LoopContract = artifacts.require('Loop');

contract('Loop', (accounts) => {
  let contractInstance;

  before(async () => {
    contractInstance = await LoopContract.deployed();
  });

  it('for and while loop', async () => {
    await contractInstance.loop();
  });
});
