const ArrayReplaceFromEnd = artifacts.require('ArrayReplaceFromEnd');

contract('ArrayReplaceFromEnd', (accounts) => {
  let contractInstance;

  before(async () => {
    contractInstance = await ArrayReplaceFromEnd.new();
  });

  it('should remove elements from the array', async () => {
    await contractInstance.test();
  });
});
