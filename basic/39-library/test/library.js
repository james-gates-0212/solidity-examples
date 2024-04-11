// Import the contract artifacts and the necessary modules
const TestMath = artifacts.require('TestMath');
const TestArray = artifacts.require('TestArray');

contract('TestMath', (accounts) => {
  let testMathInstance;

  beforeEach(async () => {
    // Deploy the TestMath contract
    testMathInstance = await TestMath.new();
  });

  it('should calculate square root correctly', async () => {
    // Call testSquareRoot with argument 16
    const result1 = await testMathInstance.testSquareRoot(16);
    assert.equal(result1, 4, 'Expected square root of 16 to be 4');

    // Call testSquareRoot with argument 25
    const result2 = await testMathInstance.testSquareRoot(25);
    assert.equal(result2, 5, 'Expected square root of 25 to be 5');

    // Call testSquareRoot with argument 0
    const result3 = await testMathInstance.testSquareRoot(0);
    assert.equal(result3, 0, 'Expected square root of 0 to be 0');
  });
});

contract('TestArray', (accounts) => {
  let testArrayInstance;

  beforeEach(async () => {
    // Deploy the TestArray contract
    testArrayInstance = await TestArray.new();
  });

  it('should remove element from array correctly', async () => {
    // Call testArrayRemove
    await testArrayInstance.testArrayRemove();

    // Get the updated array
    const arr = await testArrayInstance.getArray();

    assert.equal(arr.length, 2, 'Expected array length to be 2');
    assert.equal(arr[0], 0, 'Expected element at index 0 to be 0');
    assert.equal(arr[1], 2, 'Expected element at index 1 to be 2');
  });
});
