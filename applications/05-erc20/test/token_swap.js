const TokenSwap = artifacts.require('TokenSwap');
const ERC20 = artifacts.require('ERC20');

contract('TokenSwap', (accounts) => {
  let token1;
  let token2;
  let tokenSwap;

  const owner1 = accounts[0];
  const amount1 = 10;
  const owner2 = accounts[1];
  const amount2 = 20;

  beforeEach(async () => {
    // Deploy ERC20 tokens
    token1 = await ERC20.new('AliceCoin', 'ALC', 18);
    token2 = await ERC20.new('BobCoin', 'BCO', 18);

    // Mint tokens to owners
    await token1.mint(owner1, 100);
    await token2.mint(owner2, 100);

    // Deploy TokenSwap contract
    tokenSwap = await TokenSwap.new(token1.address, owner1, amount1, token2.address, owner2, amount2);

    // Approve TokenSwap contract to withdraw tokens
    await token1.approve(tokenSwap.address, amount1, { from: owner1 });
    await token2.approve(tokenSwap.address, amount2, { from: owner2 });
  });

  it('should swap tokens successfully', async () => {
    // Call swap function
    await tokenSwap.swap();

    // Check token balances after swap
    const balance1AfterSwap = await token1.balanceOf(owner1);
    const balance2AfterSwap = await token2.balanceOf(owner2);

    assert.equal(balance1AfterSwap.toNumber(), 90, 'Token 1 balance of owner1 is incorrect');
    assert.equal(balance2AfterSwap.toNumber(), 80, 'Token 2 balance of owner2 is incorrect');
  });
});
