const HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', (accounts) => {
  it('should display `Hello, World!`', async () => {
    const helloWorldInstance = await HelloWorld.deployed();
    const message = await helloWorldInstance.getMessage.call();

    assert.equal(message.valueOf(), 'Hello, World!', "`Hello, World!` wasn't displayed");
  });
  it('should display `Welcome to solidity!`', async () => {
    const helloWorldInstance = await HelloWorld.deployed();

    await helloWorldInstance.setMessage.call('Welcome to solidity!');

    const message = await helloWorldInstance.getMessage.call();

    assert.equal(message.valueOf(), 'Hello, World!', "`Hello, World!` wasn't displayed");
  });
});
