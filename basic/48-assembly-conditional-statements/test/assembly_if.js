// testAssemblyIf.js
const AssemblyIf = artifacts.require('AssemblyIf');

contract('AssemblyIf', (accounts) => {
  it('should return 99 if x is less than 10', async () => {
    const instance = await AssemblyIf.deployed();
    const x = 5;
    const expectedZ = 99;

    const result = await instance.yul_if(x);
    assert.equal(result, expectedZ, 'Unexpected value of z');
  });

  it('should return 10 if x is 1', async () => {
    const instance = await AssemblyIf.deployed();
    const x = 1;
    const expectedZ = 10;

    const result = await instance.yul_switch(x);
    assert.equal(result, expectedZ, 'Unexpected value of z');
  });

  it('should return 20 if x is 2', async () => {
    const instance = await AssemblyIf.deployed();
    const x = 2;
    const expectedZ = 20;

    const result = await instance.yul_switch(x);
    assert.equal(result, expectedZ, 'Unexpected value of z');
  });

  it('should return 0 if x is neither 1 nor 2', async () => {
    const instance = await AssemblyIf.deployed();
    const x = 3;
    const expectedZ = 0;

    const result = await instance.yul_switch(x);
    assert.equal(result, expectedZ, 'Unexpected value of z');
  });
});
