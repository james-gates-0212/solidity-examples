// Import the necessary dependencies
const A = artifacts.require('A');
const B = artifacts.require('B');

contract('A', (accounts) => {
  let aInstance;
  let bInstance;

  beforeEach(async () => {
    // Deploy the contracts
    bInstance = await B.new();
    aInstance = await A.new();
  });

  it('should delegatecall setVars function in contract B', async () => {
    const value = web3.utils.toWei('1', 'ether');
    const sender = accounts[0];
    const num = 42;

    // Call the setVars function in contract A, delegating the call to contract B
    await aInstance.setVars(bInstance.address, num, {
      from: sender,
      value: value,
    });

    // Get the values from contract A
    const aNum = await aInstance.num();
    const aSender = await aInstance.sender();
    const aValue = await aInstance.value();

    // Get the values from contract B
    const bNum = await bInstance.num();
    const bSender = await bInstance.sender();
    const bValue = await bInstance.value();

    // Assert that the values in contract A are set correctly
    assert.strictEqual(aNum.toString(), num.toString(), 'Value of num in contract A is incorrect');
    assert.strictEqual(aSender, sender, 'Value of sender in contract A is incorrect');
    assert.strictEqual(aValue.toString(), value.toString(), 'Value of value in contract A is incorrect');

    // Assert that the values in contract B are not modified
    assert.notStrictEqual(bNum.toString(), num.toString(), 'Value of num in contract B is incorrect');
    assert.notStrictEqual(bSender, sender, 'Value of sender in contract B is incorrect');
    assert.notStrictEqual(bValue.toString(), value.toString(), 'Value of value in contract B is incorrect');
  });
});
