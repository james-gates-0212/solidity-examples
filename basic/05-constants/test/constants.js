const Constants = artifacts.require('Constants');

contract('Constants', (accounts) => {
  let contractInstance;

  before(async () => {
    contractInstance = await Constants.deployed();
  });

  it('should display `0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc`', async () => {
    const myAddress = await contractInstance.MY_ADDRESS();
    assert.equal(
      myAddress,
      '0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc',
      "0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc wasn't displayed",
    );
  });

  it('should display `123`', async () => {
    const myUint = await contractInstance.MY_UINT();
    assert.equal(myUint, 123, "123 wasn't displayed");
  });
});
