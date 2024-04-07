// Import the necessary dependencies
const CarFactory = artifacts.require('CarFactory');

contract('CarFactory', (accounts) => {
  let carFactoryInstance;

  beforeEach(async () => {
    // Deploy the contract
    carFactoryInstance = await CarFactory.new();
  });

  it('should create a new Car contract', async () => {
    const owner = accounts[0];
    const model = 'Tesla';

    // Call the create function in CarFactory contract to create a new Car contract
    await carFactoryInstance.create(owner, model);

    // Get the details of the created Car contract
    const result = await carFactoryInstance.getCar(0);

    // Assert that the details of the created Car contract are correct
    assert.strictEqual(result.owner.toLowerCase(), owner.toLowerCase(), 'Owner address is incorrect');
    assert.strictEqual(result.model, model, 'Model is incorrect');
    assert.strictEqual(result.balance.toString(), '0', 'Car contract balance should be 0');
  });

  it('should create a new Car contract and send ether', async () => {
    const owner = accounts[0];
    const model = 'Tesla';
    const value = web3.utils.toWei('1', 'ether');

    // Call the createAndSendEther function in CarFactory contract to create a new Car contract and send ether
    await carFactoryInstance.createAndSendEther(owner, model, { value: value });

    // Get the details of the created Car contract
    const result = await carFactoryInstance.getCar(0);

    // Assert that the details of the created Car contract are correct
    assert.strictEqual(result.owner.toLowerCase(), owner.toLowerCase(), 'Owner address is incorrect');
    assert.strictEqual(result.model, model, 'Model is incorrect');
    assert.strictEqual(result.balance.toString(), value, 'Car contract balance is incorrect');
  });

  it('should create a new Car contract using create2', async () => {
    const owner = accounts[0];
    const model = 'Tesla';
    const salt = '0x123456789';

    // Call the create2 function in CarFactory contract to create a new Car contract using create2
    await carFactoryInstance.create2(owner, model, salt);

    // Get the details of the created Car contract
    const result = await carFactoryInstance.getCar(0);

    // Assert that the details of the created Car contract are correct
    assert.strictEqual(result.owner.toLowerCase(), owner.toLowerCase(), 'Owner address is incorrect');
    assert.strictEqual(result.model, model, 'Model is incorrect');
    assert.strictEqual(result.balance.toString(), '0', 'Car contract balance should be 0');
  });

  it('should create a new Car contract using create2 and send ether', async () => {
    const owner = accounts[0];
    const model = 'Tesla';
    const salt = '0x123456789';
    const value = web3.utils.toWei('1', 'ether');

    // Call the create2AndSendEther function in CarFactory contract to create a new Car contract using create2 and send ether
    await carFactoryInstance.create2AndSendEther(owner, model, salt, { value: value });

    // Get the details of the created Car contract
    const result = await carFactoryInstance.getCar(0);

    // Assert that the details of the created Car contract are correct
    assert.strictEqual(result.owner.toLowerCase(), owner.toLowerCase(), 'Owner address is incorrect');
    assert.strictEqual(result.model, model, 'Model is incorrect');
    assert.strictEqual(result.balance.toString(), value, 'Car contract balance is incorrect');
  });
});
