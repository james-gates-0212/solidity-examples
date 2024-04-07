// Import the necessary dependencies
const Receiver = artifacts.require('Receiver');
const Caller = artifacts.require('Caller');

contract('Caller', (accounts) => {
  let receiverInstance;
  let callerInstance;

  beforeEach(async () => {
    // Deploy the contracts
    receiverInstance = await Receiver.new();
    callerInstance = await Caller.new();
  });

  it('should call foo function in Receiver contract', async () => {
    const value = web3.utils.toWei('1', 'ether');
    const sender = accounts[0];

    // Call the testCallFoo function
    const { logs } = await callerInstance.testCallFoo(receiverInstance.address, {
      from: sender,
      value: value,
    });

    // Check the emitted event
    assert.strictEqual(logs.length, 1, 'Response event not emitted');

    // Parse the response from the event
    const success = logs[0].args.success;
    const data = logs[0].args.data;

    // Assert that the call was successful
    assert.strictEqual(success, true, 'Call to foo function was not successful');

    // Assert that the returned data is the expected value
    assert.strictEqual(
      data,
      '0x000000000000000000000000000000000000000000000000000000000000007c',
      'Returned data is incorrect',
    );
  });

  it('should trigger fallback function in Receiver contract', async () => {
    const value = web3.utils.toWei('1', 'ether');
    const sender = accounts[0];

    // Call the testCallDoesNotExist function
    const { logs } = await callerInstance.testCallDoesNotExist(receiverInstance.address, {
      from: sender,
      value: value,
    });

    // Check the emitted event
    assert.strictEqual(logs.length, 1, 'Response event not emitted');

    // Parse the response from the event
    const success = logs[0].args.success;
    const data = logs[0].args.data;

    // Assert that the call was successful
    assert.strictEqual(success, true, 'Call to fallback function was not successful');

    // Assert that the returned data is empty
    assert.strictEqual(data, null, 'Returned data is not empty');
  });
});
