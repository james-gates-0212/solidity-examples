const IfElseContract = artifacts.require('IfElse');

contract('If Else', (accounts) => {
  let contractInstance;

  before(async () => {
    contractInstance = await IfElseContract.deployed();
  });

  it('should display `0`, if 5 < 10', async () => {
    const value = await contractInstance.foo(5);
    assert.equal(value, 0);
  });

  it('should display `1`, else if 15 < 20', async () => {
    const value = await contractInstance.foo(15);
    assert.equal(value, 1);
  });

  it('should display `2`, else', async () => {
    const value = await contractInstance.foo(25);
    assert.equal(value, 2);
  });

  it('should display `1`, ternary 5 < 10', async () => {
    const value = await contractInstance.ternary(5);
    assert.equal(value, 1);
  });

  it('should display `2`, ternary 15 > 10', async () => {
    const value = await contractInstance.ternary(15);
    assert.equal(value, 2);
  });
});
