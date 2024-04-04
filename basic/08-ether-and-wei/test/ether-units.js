const EtherUnitsContract = artifacts.require('EtherUnits');

contract('Ethereum Units', (accounts) => {
  let contractInstance;

  before(async () => {
    contractInstance = await EtherUnitsContract.deployed();
  });

  it('should display `1 wei`', async () => {
    const value = await contractInstance.oneWei();
    assert.equal(value, 1);
  });

  it('should display `1 wei == 1`', async () => {
    const value = await contractInstance.isOneWei();
    assert.equal(value, true);
  });

  it('should display `1 ether`', async () => {
    const value = await contractInstance.oneEther();
    assert.equal(value, 10n ** 18n);
  });

  it('should display `1 ether == 1e18`', async () => {
    const value = await contractInstance.isOneEther();
    assert.equal(value, true);
  });
});
