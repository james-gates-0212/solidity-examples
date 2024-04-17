const BitwiseOps = artifacts.require('BitwiseOps');

contract('BitwiseOps', (accounts) => {
  let bitwiseOps;

  before(async () => {
    bitwiseOps = await BitwiseOps.deployed();
  });

  it('should perform bitwise AND correctly', async () => {
    const x = 14;
    const y = 11;
    const expected = 10;

    const result = await bitwiseOps.and(x, y);

    assert.equal(result, expected, 'Bitwise AND result is incorrect');
  });

  it('should perform bitwise OR correctly', async () => {
    const x = 12;
    const y = 9;
    const expected = 13;

    const result = await bitwiseOps.or(x, y);

    assert.equal(result, expected, 'Bitwise OR result is incorrect');
  });

  it('should perform bitwise XOR correctly', async () => {
    const x = 12;
    const y = 5;
    const expected = 9;

    const result = await bitwiseOps.xor(x, y);

    assert.equal(result, expected, 'Bitwise XOR result is incorrect');
  });

  it('should perform bitwise NOT correctly', async () => {
    const x = 12;
    const expected = 243;

    const result = await bitwiseOps.not(x);

    assert.equal(result, expected, 'Bitwise NOT result is incorrect');
  });

  it('should perform left shift correctly', async () => {
    const x = 1;
    const bits = 3;
    const expected = 8;

    const result = await bitwiseOps.shiftLeft(x, bits);

    assert.equal(result, expected, 'Left shift result is incorrect');
  });

  it('should perform right shift correctly', async () => {
    const x = 8;
    const bits = 2;
    const expected = 2;

    const result = await bitwiseOps.shiftRight(x, bits);

    assert.equal(result, expected, 'Right shift result is incorrect');
  });

  it('should get the last n bits correctly', async () => {
    const x = 13;
    const n = 3;
    const expected = 5;

    const result = await bitwiseOps.getLastNBits(x, n);

    assert.equal(result, expected, 'Last n bits result is incorrect');
  });

  it('should get the last n bits using mod correctly', async () => {
    const x = 13;
    const n = 3;
    const expected = 5;

    const result = await bitwiseOps.getLastNBitsUsingMod(x, n);

    assert.equal(result, expected, 'Last n bits using mod result is incorrect');
  });

  it('should get the position of the most significant bit correctly', async () => {
    const x = 12;
    const expected = 3;

    const result = await bitwiseOps.mostSignificantBit(x);

    assert.equal(result, expected, 'Most significant bit position is incorrect');
  });

  it('should get the first n bits correctly', async () => {
    const x = 14;
    const n = 2;
    const len = 4;
    const expected = 12;

    const result = await bitwiseOps.getFirstNBits(x, n, len);

    assert.equal(result, expected, 'First n bits result is incorrect');
  });
});
