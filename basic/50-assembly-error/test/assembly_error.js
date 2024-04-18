// testAssemblyError.js
const AssemblyError = artifacts.require('AssemblyError');

contract('AssemblyError', (accounts) => {
  it('should revert if x is greater than 10', async () => {
    const instance = await AssemblyError.deployed();
    const x = 15;

    try {
      await instance.yul_revert(x);
      assert.fail('Expected revert not received');
    } catch (error) {
      const revertFound = error.message.search('revert') >= 0;
      assert(revertFound, `Expected "revert" error but got ${error} instead`);
    }
  });

  it('should not revert if x is less than or equal to 10', async () => {
    const instance = await AssemblyError.deployed();
    const x = 8;

    try {
      await instance.yul_revert(x);
    } catch (error) {
      assert.fail(`Reverted unexpectedly with error: ${error}`);
    }
  });
});
