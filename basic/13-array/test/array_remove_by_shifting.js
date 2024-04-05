const ArrayRemoveByShifting = artifacts.require('ArrayRemoveByShifting');

contract('ArrayRemoveByShifting', (accounts) => {
  let contractInstance;

  before(async () => {
    contractInstance = await ArrayRemoveByShifting.new();
  });

  it('should remove elements from the array', async () => {
    await contractInstance.test();
  });
});
