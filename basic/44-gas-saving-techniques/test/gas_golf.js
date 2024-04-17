const GasGolf = artifacts.require('GasGolf');

contract('GasGolf', (accounts) => {
  it('should calculate the sum correctly', async () => {
    const gasGolf = await GasGolf.deployed();
    const nums = [1, 2, 3, 4, 5, 100];
    const expectedTotal = nums.filter((num) => num % 2 === 0 && num < 99).reduce((acc, num) => acc + num, 0);

    await gasGolf.sumIfEvenAndLessThan99(nums);
    const total = await gasGolf.total();

    assert.equal(total.toNumber(), expectedTotal, 'The calculated total is incorrect');
  });
});
