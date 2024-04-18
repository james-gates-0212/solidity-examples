// testAssemblyMath.js
const AssemblyMath = artifacts.require('AssemblyMath');

contract('AssemblyMath', (accounts) => {
  it('should add two numbers correctly', async () => {
    const instance = await AssemblyMath.deployed();
    const x = 5;
    const y = 10;
    const expectedZ = 15;

    const result = await instance.yul_add(x, y);
    assert.equal(result, expectedZ, 'Unexpected value of z');
  });

  it('should multiply two numbers correctly', async () => {
    const instance = await AssemblyMath.deployed();
    const x = 5;
    const y = 10;
    const expectedZ = 50;

    const result = await instance.yul_mul(x, y);
    assert.equal(result, expectedZ, 'Unexpected value of z');
  });

  it('should round to the nearest multiple of b correctly', async () => {
    const instance = await AssemblyMath.deployed();
    const x = 90;
    const b = 100;
    const expectedZ = 100;

    const result = await instance.yul_fixed_point_round(x, b);
    assert.equal(result, expectedZ, 'Unexpected value of z');
  });
});
