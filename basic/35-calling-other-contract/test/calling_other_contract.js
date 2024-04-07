// Import the necessary dependencies
const Callee = artifacts.require('Callee');
const Caller = artifacts.require('Caller');

contract('Caller', (accounts) => {
  let calleeInstance;
  let callerInstance;

  beforeEach(async () => {
    // Deploy the contracts
    calleeInstance = await Callee.new();
    callerInstance = await Caller.new();
  });

  it('should set x in Callee contract', async () => {
    const newX = 42;

    // Call the setX function in Caller contract, passing Callee contract as an argument
    await callerInstance.setX(calleeInstance.address, newX);

    // Get the value of x from Callee contract
    const result = await calleeInstance.x();

    // Assert that the value of x is set correctly
    assert.strictEqual(result.toString(), newX.toString(), 'Value of x in Callee contract is incorrect');
  });

  it('should set x in Callee contract from address', async () => {
    const newX = 42;

    // Call the setXFromAddress function in Caller contract, passing Callee contract address and x as arguments
    await callerInstance.setXFromAddress(calleeInstance.address, newX);

    // Get the value of x from Callee contract
    const result = await calleeInstance.x();

    // Assert that the value of x is set correctly
    assert.strictEqual(result.toString(), newX.toString(), 'Value of x in Callee contract is incorrect');
  });

  it('should set x and send ether to Callee contract', async () => {
    const newX = 42;
    const value = web3.utils.toWei('1', 'ether');

    // Call the setXandSendEther function in Caller contract, passing Callee contract and x as arguments, and sending ether
    await callerInstance.setXandSendEther(calleeInstance.address, newX, {
      value: value,
    });

    // Get the value of x from Callee contract
    const resultX = await calleeInstance.x();

    // Get the value of value from Callee contract
    const resultValue = await calleeInstance.value();

    // Assert that the value of x and value are set correctly
    assert.strictEqual(resultX.toString(), newX.toString(), 'Value of x in Callee contract is incorrect');
    assert.strictEqual(resultValue.toString(), value.toString(), 'Value of value in Callee contract is incorrect');
  });
});
