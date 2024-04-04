const ImmutableContract = artifacts.require('Immutable');

contract('Immutable', (accounts) => {
  let contractInstance;

  before(async () => {
    contractInstance = await ImmutableContract.deployed();
  });

  it(`should display ${accounts[0]}`, async function () {
    const myAddress = await contractInstance.MY_ADDRESS();
    assert.equal(myAddress, accounts[0]);
  });

  it('should display 123', async function () {
    const myUint = await contractInstance.MY_UINT();
    assert.equal(myUint, 123);
  });
});
