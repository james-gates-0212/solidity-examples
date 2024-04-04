// Import the contract artifacts and the necessary modules
const ArrayContract = artifacts.require('Array');

contract('Array', (accounts) => {
  let arrayInstance;

  beforeEach(async () => {
    // Deploy a new instance of the Array contract before each test
    arrayInstance = await ArrayContract.new();
  });

  it('should push elements to the array', async () => {
    const value = 100;

    // Push the value to the array using the push function
    await arrayInstance.push(value);

    // Get the value at index 0 using the get function
    const result = await arrayInstance.get(0);

    // Assert that the returned value matches the pushed value
    assert.equal(result, value, 'Incorrect value pushed to the array');
  });

  it('should remove an element from the array', async () => {
    const value = 100;

    // Push the value to the array using the push function
    await arrayInstance.push(value);

    // Remove the element at index 0 using the remove function
    await arrayInstance.remove(0);

    // Get the value at index 0 after removal
    const result = await arrayInstance.get(0);

    // Assert that the returned value is 0 (default value)
    assert.equal(result, 0, 'Element was not removed from the array');
  });

  it('should return the length of the array', async () => {
    const value1 = 100;
    const value2 = 200;

    // Push two values to the array
    await arrayInstance.push(value1);
    await arrayInstance.push(value2);

    // Get the length of the array using the getLength function
    const result = await arrayInstance.getLength();

    // Assert that the returned length is 2
    assert.equal(result, 2, 'Incorrect array length');
  });

  it('should return the entire array', async () => {
    const values = [100, 200, 300];

    // Push the values to the array
    for (const value of values) {
      await arrayInstance.push(value);
    }

    // Get the entire array using the getArr function
    const result = await arrayInstance.getArr();

    // Assert that the returned array matches the pushed values
    result.forEach((value, index) => {
      assert.equal(value, values[index], 'Incorrect array returned');
    });
  });
});
