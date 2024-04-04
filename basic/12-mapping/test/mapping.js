// Import the contract artifacts and the necessary modules
const Mapping = artifacts.require('Mapping');
const NestedMapping = artifacts.require('NestedMapping');

contract('Mapping', (accounts) => {
  let mappingInstance;

  beforeEach(async () => {
    // Deploy a new instance of the Mapping contract before each test
    mappingInstance = await Mapping.new();
  });

  it('should set and get a value from the mapping', async () => {
    const addr = accounts[0];
    const value = 100;

    // Set the value using the set function
    await mappingInstance.set(addr, value);

    // Get the value using the get function
    const result = await mappingInstance.get(addr);

    // Assert that the returned value matches the set value
    assert.equal(result, value, 'Incorrect value retrieved from the mapping');
  });

  it('should remove a value from the mapping', async () => {
    const addr = accounts[0];
    const value = 100;

    // Set the value using the set function
    await mappingInstance.set(addr, value);

    // Remove the value using the remove function
    await mappingInstance.remove(addr);

    // Get the value after removal
    const result = await mappingInstance.get(addr);

    // Assert that the returned value is 0 (default value)
    assert.equal(result, 0, 'Value was not removed from the mapping');
  });
});

contract('NestedMapping', (accounts) => {
  let nestedMappingInstance;

  beforeEach(async () => {
    // Deploy a new instance of the NestedMapping contract before each test
    nestedMappingInstance = await NestedMapping.new();
  });

  it('should set and get a value from the nested mapping', async () => {
    const addr = accounts[0];
    const index = 1;
    const value = true;

    // Set the value using the set function
    await nestedMappingInstance.set(addr, index, value);

    // Get the value using the get function
    const result = await nestedMappingInstance.get(addr, index);

    // Assert that the returned value matches the set value
    assert.equal(result, value, 'Incorrect value retrieved from the nested mapping');
  });

  it('should remove a value from the nested mapping', async () => {
    const addr = accounts[0];
    const index = 1;
    const value = true;

    // Set the value using the set function
    await nestedMappingInstance.set(addr, index, value);

    // Remove the value using the remove function
    await nestedMappingInstance.remove(addr, index);

    // Get the value after removal
    const result = await nestedMappingInstance.get(addr, index);

    // Assert that the returned value is false (default value)
    assert.equal(result, false, 'Value was not removed from the nested mapping');
  });
});
