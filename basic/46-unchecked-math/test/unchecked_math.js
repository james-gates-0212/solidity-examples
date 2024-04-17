const UncheckedMath = artifacts.require('UncheckedMath');

contract('UncheckedMath', (accounts) => {
  let uncheckedMath;

  before(async () => {
    uncheckedMath = await UncheckedMath.deployed();
  });

  it('should add two numbers without checking for overflow', async () => {
    const x = 2;
    const y = 3;
    const expected = 5;

    const result = await uncheckedMath.add(x, y);

    assert.equal(result, expected, 'Addition result is incorrect');
  });

  it('should subtract two numbers without checking for underflow', async () => {
    const x = 5;
    const y = 3;
    const expected = 2;

    const result = await uncheckedMath.sub(x, y);

    assert.equal(result, expected, 'Subtraction result is incorrect');
  });

  it('should calculate the sum of cubes without checking for overflow', async () => {
    const x = 2;
    const y = 3;
    const expected = 35; // 2^3 + 3^3 = 8 + 27 = 35

    const result = await uncheckedMath.sumOfCubes(x, y);

    assert.equal(result, expected, 'Sum of cubes is incorrect');
  });
});
