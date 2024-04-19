// testEtherWallet.js
const EtherWallet = artifacts.require('EtherWallet');

contract('EtherWallet', (accounts) => {
  const owner = accounts[0];
  const nonOwner = accounts[1];

  let instance;

  beforeEach(async () => {
    instance = await EtherWallet.new({ from: owner });
  });

  it('should set the owner correctly', async () => {
    const walletOwner = await instance.owner();
    assert.equal(walletOwner, owner, 'Unexpected owner address');
  });

  it('should receive and store Ether', async () => {
    const amount = web3.utils.toWei('1', 'ether');

    await web3.eth.sendTransaction({
      from: nonOwner,
      to: instance.address,
      value: amount,
    });

    const balance = await instance.getBalance();
    assert.equal(balance.toString(), amount, 'Unexpected wallet balance');
  });

  it('should allow the owner to withdraw Ether', async () => {
    const initialBalance = web3.utils.toWei('2', 'ether');
    const withdrawalAmount = web3.utils.toWei('1', 'ether');

    await web3.eth.sendTransaction({
      from: nonOwner,
      to: instance.address,
      value: initialBalance,
    });

    const ownerBalanceBefore = await web3.eth.getBalance(owner);

    await instance.withdraw(withdrawalAmount, { from: owner });

    const ownerBalanceAfter = await web3.eth.getBalance(owner);
    const expectedBalanceAfter = web3.utils.toBN(ownerBalanceBefore).add(web3.utils.toBN(withdrawalAmount));

    assert.equal(
      BigInt(ownerBalanceAfter.toString()) / 1000000000000000000n,
      BigInt(expectedBalanceAfter.toString()) / 1000000000000000000n,
      'Unexpected owner balance after withdrawal',
    );
  });

  it('should not allow a non-owner to withdraw Ether', async () => {
    const initialBalance = web3.utils.toWei('2', 'ether');
    const withdrawalAmount = web3.utils.toWei('1', 'ether');

    await web3.eth.sendTransaction({
      from: nonOwner,
      to: instance.address,
      value: initialBalance,
    });

    try {
      await instance.withdraw(withdrawalAmount, { from: nonOwner });
      assert.fail('Expected revert not received');
    } catch (error) {
      const revertFound = error.message.search('caller is not owner') >= 0;
      assert(revertFound, `Expected "caller is not owner" error but got ${error} instead`);
    }
  });
});
