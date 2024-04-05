const HelloWorldContract = artifacts.require('HelloWorld');

contract('HelloWorld', (accounts) => {
  let helloWorldContractInstance;

  before(async () => {
    helloWorldContractInstance = await HelloWorldContract.deployed();
  });

  it('should display `Hello, World!`', async () => {
    const message = await helloWorldContractInstance.getMessage();

    // Assert the result
    assert.equal(message, 'Hello, World!', "`Hello, World!` wasn't displayed");
  });

  it('should display `Welcome to solidity!`', async () => {
    const initialValue = await helloWorldContractInstance.getMessage();

    await helloWorldContractInstance.setMessage('Welcome to solidity!');

    const message = await helloWorldContractInstance.getMessage();

    // Assert the result
    assert.equal(message, 'Welcome to solidity!', "`Welcome to solidity!` wasn't displayed");
    assert.notEqual(message, initialValue, "message wasn't updated");
  });
});
