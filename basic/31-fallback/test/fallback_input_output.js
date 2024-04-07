// Import the necessary dependencies
const FallbackInputOutput = artifacts.require('FallbackInputOutput');
const Counter = artifacts.require('Counter');
const TestFallbackInputOutput = artifacts.require('TestFallbackInputOutput');

contract('TestFallbackInputOutput', (accounts) => {
  let fallbackInputOutputInstance;
  let counterInstance;
  let testFallbackInputOutputInstance;

  beforeEach(async () => {
    // Deploy the contracts
    counterInstance = await Counter.new();
    fallbackInputOutputInstance = await FallbackInputOutput.new(counterInstance.address);
    testFallbackInputOutputInstance = await TestFallbackInputOutput.new();
  });

  it('should call fallback function with input and get output', async () => {
    // Get the test data
    const testData = await testFallbackInputOutputInstance.getTestData();
    const [getData, incData] = Object.values(testData);

    // Call the fallback function with input data
    const { logs } = await testFallbackInputOutputInstance.test(fallbackInputOutputInstance.address, getData);

    // Check the emitted event
    assert.strictEqual(logs.length, 1, 'Fallback event not emitted');

    // Parse the response from the event
    const res = logs[0].args.res;

    // Assert that the response is the expected output
    assert.strictEqual(web3.utils.hexToNumberString(res), '0', 'Fallback function did not return the expected output');

    // Call the fallback function with another input data
    const { logs: incLogs } = await testFallbackInputOutputInstance.test(fallbackInputOutputInstance.address, incData);

    // Check the emitted event
    assert.strictEqual(incLogs.length, 1, 'Fallback event not emitted');

    // Parse the response from the event
    const incRes = incLogs[0].args.res;

    // Assert that the response is the updated output
    assert.strictEqual(
      web3.utils.hexToNumberString(incRes),
      '1',
      'Fallback function did not return the expected output after increment',
    );
  });
});
