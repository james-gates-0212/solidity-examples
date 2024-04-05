const FirstAppContract = artifacts.require('FirstApp');

contract('FirstApp', (accounts) => {
  let firstAppContractInstance;

  before(async () => {
    firstAppContractInstance = await FirstAppContract.deployed();
  });

  it('should display 10', async () => {
    for (let i = 0; i < 10; i++) {
      await firstAppContractInstance.inc();
    }
    const ten = await firstAppContractInstance.get();

    assert.equal(ten, 10, "10 wasn't displayed");
  });

  it('should display 5', async () => {
    for (let i = 5; i > 0; i--) {
      await firstAppContractInstance.dec();
    }
    const ten = await firstAppContractInstance.get();

    assert.equal(ten, 5, "5 wasn't displayed");
  });
});
