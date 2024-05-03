const MinimalProxy = artifacts.require('MinimalProxy');

contract('MinimalProxy', (accounts) => {
  let minimalProxyInstance;

  const targetContractAddress = '0x1234567890123456789012345678901234567890';
  let clonedContractAddress;

  before(async () => {
    minimalProxyInstance = await MinimalProxy.deployed();
  });

  it('should clone the target contract', async () => {
    const result = await minimalProxyInstance.clone.call(targetContractAddress);
    clonedContractAddress = result;

    assert.ok(clonedContractAddress, 'Cloned contract address should exist');
  });

  it('should have the same code as the target contract', async () => {
    const targetContractCode = await web3.eth.getCode(targetContractAddress);
    const clonedContractCode = await web3.eth.getCode(clonedContractAddress);

    assert.equal(
      clonedContractCode,
      targetContractCode,
      'Cloned contract should have the same code as the target contract',
    );
  });
});
