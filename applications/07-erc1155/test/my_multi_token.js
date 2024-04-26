const MyMultiToken = artifacts.require('MyMultiToken');

contract('MyMultiToken', (accounts) => {
  let myMultiToken;

  before(async () => {
    myMultiToken = await MyMultiToken.deployed();
  });

  it('should mint tokens', async () => {
    const tokenId = 1;
    const value = 100;
    const data = '0x';

    const initialBalance = await myMultiToken.balanceOf(accounts[0], tokenId);

    await myMultiToken.mint(tokenId, value, data);

    const newBalance = await myMultiToken.balanceOf(accounts[0], tokenId);

    assert.equal(newBalance.toNumber(), initialBalance.toNumber() + value, 'Token balance is incorrect');
  });

  it('should burn tokens', async () => {
    const tokenId = 1;
    const value = 50;

    const initialBalance = await myMultiToken.balanceOf(accounts[0], tokenId);

    await myMultiToken.burn(tokenId, value);

    const newBalance = await myMultiToken.balanceOf(accounts[0], tokenId);

    assert.equal(newBalance.toNumber(), initialBalance.toNumber() - value, 'Token balance is incorrect');
  });
});
