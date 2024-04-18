// testAssemblyLoop.js
const AssemblyLoop = artifacts.require('AssemblyLoop');

contract('AssemblyLoop', (accounts) => {
  it('should return 10 using a for loop', async () => {
    const instance = await AssemblyLoop.deployed();
    const expectedZ = 10;

    const result = await instance.yul_for_loop();
    assert.equal(result, expectedZ, 'Unexpected value of z');
  });

  it('should return 5 using a while loop', async () => {
    const instance = await AssemblyLoop.deployed();
    const expectedZ = 5;

    const result = await instance.yul_while_loop();
    assert.equal(result, expectedZ, 'Unexpected value of z');
  });
});
