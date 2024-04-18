const AssemblyVariable = artifacts.require('AssemblyVariable');
// const { expect } = require('chai');
// const truffleAssert = require('truffle-assertions');

contract('AssemblyVariable', (accounts) => {
  let assemblyVariableInstance;

  before(async () => {
    assemblyVariableInstance = await AssemblyVariable.new();
  });

  it('should return the correct value of z', async () => {
    const z = await assemblyVariableInstance.yul_let();
    const expected = 456;
    assert.equal(z, expected, 'The result is incorrect');
  });
});
