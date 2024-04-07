// Import the necessary dependencies
const FunctionSelector = artifacts.require('FunctionSelector');

contract('FunctionSelector', () => {
  let functionSelectorInstance;

  beforeEach(async () => {
    // Deploy the contract
    functionSelectorInstance = await FunctionSelector.new();
  });

  it('should return the function selector for "transfer(address,uint256)"', async () => {
    const expectedSelector = '0xa9059cbb';

    // Call the getSelector function
    const result = await functionSelectorInstance.getSelector('transfer(address,uint256)');

    // Assert that the returned function selector is correct
    assert.strictEqual(result, expectedSelector, 'Returned function selector is incorrect');
  });

  it('should return the function selector for "transferFrom(address,address,uint256)"', async () => {
    const expectedSelector = '0x23b872dd';

    // Call the getSelector function
    const result = await functionSelectorInstance.getSelector('transferFrom(address,address,uint256)');

    // Assert that the returned function selector is correct
    assert.strictEqual(result, expectedSelector, 'Returned function selector is incorrect');
  });
});
