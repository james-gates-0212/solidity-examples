const MostSignificantBitFunction = artifacts.require('MostSignificantBitFunction');

contract('MostSignificantBitFunction', (accounts) => {
  let mostSignificantBitFunction;

  before(async () => {
    mostSignificantBitFunction = await MostSignificantBitFunction.deployed();
  });

  it('should find the most significant bit correctly', async () => {
    const x = 0x1234567890abcdefn;
    const expected = 60;

    const result = await mostSignificantBitFunction.mostSignificantBit(x);

    assert.equal(web3.utils.hexToNumber(result), expected, 'Most significant bit is incorrect');
  });
});
