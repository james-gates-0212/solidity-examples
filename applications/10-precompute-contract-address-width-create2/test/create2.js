const Factory = artifacts.require('Factory');
const TestContract = artifacts.require('TestContract');

contract('Factory', (accounts) => {
  it('should deploy a new TestContract', async () => {
    const factoryInstance = await Factory.deployed();

    const owner = accounts[0];
    const foo = 123;
    const salt = web3.utils.randomHex(32);

    const deployedAddress = await factoryInstance.deploy.call(owner, foo, salt);
    await factoryInstance.deploy(owner, foo, salt);

    const testContractInstance = await TestContract.at(deployedAddress);
    const deployedOwner = await testContractInstance.owner();
    const deployedFoo = await testContractInstance.foo();

    assert.equal(deployedOwner, owner, 'Owner address is incorrect');
    assert.equal(deployedFoo.toNumber(), foo, 'Foo value is incorrect');
  });
});
