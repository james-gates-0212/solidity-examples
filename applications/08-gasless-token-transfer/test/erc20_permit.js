const ERC20Permit = artifacts.require('ERC20Permit');

contract('ERC20Permit', (accounts) => {
  let erc20;

  before(async () => {
    erc20 = await ERC20Permit.new('MyToken', 'MTK', 18);
  });

  it('should have correct name, symbol, and decimals', async () => {
    const name = await erc20.name();
    const symbol = await erc20.symbol();
    const decimals = await erc20.decimals();

    assert.equal(name, 'MyToken');
    assert.equal(symbol, 'MTK');
    assert.equal(decimals, 18);
  });

  it('should mint tokens to an address', async () => {
    const amount = web3.utils.toWei('100', 'ether');
    const to = accounts[1];

    await erc20.mint(to, amount);

    const balance = await erc20.balanceOf(to);

    assert.equal(balance.toString(), amount);
  });
});
