const VariablesContract = artifacts.require('Variables');

contract('Variables', (accounts) => {
  let contractInstance;
  let sender;
  let timestamp;

  before(async () => {
    contractInstance = await VariablesContract.deployed();
    sender = await contractInstance.sender();
    timestamp = await contractInstance.timestamp();
  });

  it('should display text `Hello`', async () => {
    const text = await contractInstance.text();
    assert.equal(text, 'Hello', "`Hello` wasn't displayed");
  });

  it('should display num `123`', async () => {
    const num = await contractInstance.num();
    assert.equal(num, '123', "`123` wasn't displayed");
  });

  it('should display sender', async () => {
    const globalSender = await contractInstance.getSender();
    assert.equal(sender, globalSender, "sender wasn't displayed");
  });

  it('should display timestamp', async () => {
    const blockTimestamp = await contractInstance.getTimestamp();
    assert.notEqual(timestamp, blockTimestamp, "timestamp wasn't displayed");
  });
});
