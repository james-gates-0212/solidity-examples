const Proxy = artifacts.require('Proxy');
const TestContract1 = artifacts.require('TestContract1');
const TestContract2 = artifacts.require('TestContract2');
const Helper = artifacts.require('Helper');

contract('Proxy', function (accounts) {
  let proxy;
  let testContract1;
  let testContract2;
  let helper;

  beforeEach(async function () {
    proxy = await Proxy.deployed();
    testContract1 = await TestContract1.deployed();
    testContract2 = await TestContract2.deployed();
    helper = await Helper.deployed();
  });

  it('should deploy TestContract1 through the Proxy', async function () {
    const bytecode = await helper.getBytecode1();
    const result = await proxy.deploy(bytecode);
    const deployedAddress = result.logs[0].args.addr;

    assert.notEqual(deployedAddress, '0x0000000000000000000000000000000000000000', 'Deployment failed');

    const contract1 = await TestContract1.deployed();
    const owner = await contract1.owner();
    assert.equal(owner, accounts[0], 'Owner not set correctly');
  });

  it('should deploy TestContract2 through the Proxy', async function () {
    const x = 10;
    const y = 20;
    const bytecode = await helper.getBytecode2(x, y);
    const result = await proxy.deploy(bytecode);
    const deployedAddress = result.logs[0].args.addr;

    assert.notEqual(deployedAddress, '0x0000000000000000000000000000000000000000', 'Deployment failed');

    const contract2 = await TestContract2.deployed();
    const owner = await contract2.owner();
    const value = await contract2.value();
    const xValue = await contract2.x();
    const yValue = await contract2.y();

    assert.equal(owner, accounts[0], 'Owner not set correctly');
    assert.equal(value, 0, 'Value not set correctly');
    assert.equal(xValue, x, 'x not set correctly');
    assert.equal(yValue, y, 'y not set correctly');
  });
});
