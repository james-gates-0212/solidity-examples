// Import the necessary dependencies
const Fallback = artifacts.require('Fallback');
const SendToFallback = artifacts.require('SendToFallback');

contract('Fallback', (accounts) => {
  let fallbackInstance;
  let sendToFallbackInstance;

  beforeEach(async () => {
    // Deploy the contracts
    fallbackInstance = await Fallback.new();
    sendToFallbackInstance = await SendToFallback.new();
  });

  it('should receive Ether and emit receive event', async () => {
    const initialBalance = await web3.eth.getBalance(fallbackInstance.address);
    const value = web3.utils.toWei('1', 'ether');
    const sender = accounts[0];

    // Transfer Ether to the fallback contract
    await sendToFallbackInstance.transferToFallback(fallbackInstance.address, {
      from: sender,
      value: value,
    });

    // Check the updated balance of the fallback contract
    const updatedBalance = await web3.eth.getBalance(fallbackInstance.address);
    assert.strictEqual(
      updatedBalance.toString(),
      web3.utils.toBN(initialBalance).add(web3.utils.toBN(value)).toString(),
      'Fallback contract did not receive Ether',
    );

    // Check the emitted event
    const logs = await fallbackInstance.getPastEvents('Log', {
      fromBlock: 0,
      toBlock: 'latest',
    });
    assert.strictEqual(logs.length, 1, 'Fallback event not emitted');
    assert.strictEqual(logs[0].args.func, 'receive', 'Incorrect function name in event');
  });

  it('should call fallback function and emit fallback event', async () => {
    const initialBalance = await web3.eth.getBalance(fallbackInstance.address);
    const value = web3.utils.toWei('1', 'ether');
    const sender = accounts[0];

    // Call the fallback function
    await sendToFallbackInstance.callFallback(fallbackInstance.address, {
      from: sender,
      value: value,
    });

    // Check the updated balance of the fallback contract
    const updatedBalance = await web3.eth.getBalance(fallbackInstance.address);
    assert.strictEqual(
      updatedBalance.toString(),
      web3.utils.toBN(initialBalance).add(web3.utils.toBN(value)).toString(),
      'Fallback contract did not receive Ether',
    );

    // Check the emitted event
    const logs = await fallbackInstance.getPastEvents('Log', {
      fromBlock: 0,
      toBlock: 'latest',
    });
    assert.strictEqual(logs.length, 1, 'Fallback event not emitted');
    assert.strictEqual(logs[0].args.func, 'fallback', 'Incorrect function name in event');
  });
});
