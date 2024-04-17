const MostSignificantBitAssembly = artifacts.require('MostSignificantBitAssembly');

contract('MostSignificantBitAssembly', (accounts) => {
  let mostSignificantBitAssembly;

  before(async () => {
    mostSignificantBitAssembly = await MostSignificantBitAssembly.deployed();
  });

  it('should find the most significant bit correctly', async () => {
    const x = 0x1234567890abcdefn;
    const expected = 60;

    const result = await mostSignificantBitAssembly.mostSignificantBit(x);

    assert.equal(web3.utils.hexToNumber(result), expected, 'Most significant bit is incorrect');
  });
});
