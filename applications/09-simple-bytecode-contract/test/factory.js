const Factory = artifacts.require('Factory');
const IContract = artifacts.require('IContract');

contract('Factory', (accounts) => {
  it('should deploy a contract that returns 42', async () => {
    const factoryInstance = await Factory.deployed();

    const tx = await factoryInstance.deploy();
    const deployedAddress = tx.logs[0].args.addr;

    const contractInstance = await IContract.at(deployedAddress);
    const result = await contractInstance.getMeaningOfLife();

    assert.equal(result.toNumber(), 42, 'Returned value is not 42');
  });
});
