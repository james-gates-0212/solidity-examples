// testMultiSigWallet.js
const MultiSigWallet = artifacts.require('MultiSigWallet');

contract('MultiSigWallet', (accounts) => {
  const owners = [accounts[0], accounts[1], accounts[2]];
  const nonOwner = accounts[3];
  const numConfirmationsRequired = 2;

  let instance;

  beforeEach(async () => {
    instance = await MultiSigWallet.new(owners, numConfirmationsRequired);
  });

  it('should set the owners and numConfirmationsRequired correctly', async () => {
    const walletOwners = await instance.getOwners();
    assert.deepEqual(walletOwners, owners, 'Unexpected owners');

    const requiredConfirmations = await instance.numConfirmationsRequired();
    assert.equal(requiredConfirmations, numConfirmationsRequired, 'Unexpected numConfirmationsRequired');
  });

  it('should receive Ether when sent to the contract', async () => {
    const amount = web3.utils.toWei('1', 'ether');

    await web3.eth.sendTransaction({
      from: nonOwner,
      to: instance.address,
      value: amount,
    });

    const balance = await web3.eth.getBalance(instance.address);
    assert.equal(balance.toString(), amount, 'Unexpected wallet balance');
  });

  it('should submit a transaction correctly', async () => {
    const to = nonOwner;
    const value = web3.utils.toWei('1', 'ether');
    const data = '0x';
    const expectedTxIndex = 0;

    const result = await instance.submitTransaction(to, value, data);
    const txIndex = result.logs[0].args.txIndex.toNumber();

    assert.equal(txIndex, expectedTxIndex, 'Unexpected transaction index');
  });

  it('should confirm a transaction correctly', async () => {
    const to = nonOwner;
    const value = web3.utils.toWei('1', 'ether');
    const data = '0x';

    await instance.submitTransaction(to, value, data);
    const txIndex = 0;
    const expectedConfirmationCount = 1;

    await instance.confirmTransaction(txIndex, {
      from: owners[0],
    });

    const result = await instance.getTransaction(txIndex);

    const confirmationCount = result.numConfirmations.toNumber();

    assert.equal(confirmationCount, expectedConfirmationCount, 'Unexpected confirmation count');
  });

  it('should execute a transaction correctly', async () => {
    const to = nonOwner;
    const value = web3.utils.toWei('1', 'ether');
    const data = '0x';

    await instance.submitTransaction(to, value, data);
    await instance.confirmTransaction(0, { from: owners[0] });
    await instance.confirmTransaction(0, { from: owners[1] });

    const expectedExecuted = true;

    await instance.executeTransaction(0, {
      from: owners[0],
    });

    const result = await instance.getTransaction(0);

    const executed = result.executed;

    assert.equal(executed, expectedExecuted, 'Transaction not executed');
  });

  it('should revoke a confirmation correctly', async () => {
    const to = nonOwner;
    const value = web3.utils.toWei('1', 'ether');
    const data = '0x';

    await instance.submitTransaction(to, value, data);
    await instance.confirmTransaction(0, { from: owners[0] });

    const expectedConfirmationCount = 0;

    await instance.revokeConfirmation(0, {
      from: owners[0],
    });

    const result = await instance.getTransaction(0);

    const confirmationCount = result.numConfirmations.toNumber();

    assert.equal(confirmationCount, expectedConfirmationCount, 'Unexpected confirmation count');
  });

  it('should not allow a non-owner to submit a transaction', async () => {
    const to = nonOwner;
    const value = web3.utils.toWei('1', 'ether');
    const data = '0x';

    try {
      await instance.submitTransaction(to, value, data, { from: nonOwner });
      assert.fail('Expected revert not received');
    } catch (error) {
      const revertFound = error.message.search('not owner') >= 0;
      assert(revertFound, `Expected "not owner" error but got ${error} instead`);
    }
  });

  it('should not allow a non-owner to confirm a transaction', async () => {
    const to = nonOwner;
    const value = web3.utils.toWei('1', 'ether');
    const data = '0x';

    await instance.submitTransaction(to, value, data);
    const txIndex = 0;

    try {
      await instance.confirmTransaction(txIndex, { from: nonOwner });
      assert.fail('Expected revert not received');
    } catch (error) {
      const revertFound = error.message.search('not owner') >= 0;
      assert(revertFound, `Expected "not owner" error but got ${error} instead`);
    }
  });

  it('should not allow confirming an already executed transaction', async () => {
    const to = nonOwner;
    const value = web3.utils.toWei('1', 'ether');
    const data = '0x';

    await instance.submitTransaction(to, value, data);
    await instance.confirmTransaction(0, { from: owners[0] });
    await instance.confirmTransaction(0, { from: owners[1] });
    await instance.executeTransaction(0, { from: owners[0] });

    try {
      await instance.confirmTransaction(0, { from: owners[2] });
      assert.fail('Expected revert not received');
    } catch (error) {
      const revertFound = error.message.search('tx already executed') >= 0;
      assert(revertFound, `Expected "tx already executed" error but got ${error} instead`);
    }
  });

  it('should not allow executing a transaction without enough confirmations', async () => {
    const to = nonOwner;
    const value = web3.utils.toWei('1', 'ether');
    const data = '0x';

    await instance.submitTransaction(to, value, data);
    await instance.confirmTransaction(0, { from: owners[0] });

    try {
      await instance.executeTransaction(0, { from: owners[0] });
      assert.fail('Expected revert not received');
    } catch (error) {
      const revertFound = error.message.search('cannot execute tx') >= 0;
      assert(revertFound, `Expected "cannot execute tx" error but got ${error} instead`);
    }
  });

  it('should not allow revoking a confirmation for an already executed transaction', async () => {
    const to = nonOwner;
    const value = web3.utils.toWei('1', 'ether');
    const data = '0x';

    await instance.submitTransaction(to, value, data);
    await instance.confirmTransaction(0, { from: owners[0] });
    await instance.confirmTransaction(0, { from: owners[1] });
    await instance.executeTransaction(0, { from: owners[0] });

    try {
      await instance.revokeConfirmation(0, { from: owners[0] });
      assert.fail('Expected revert not received');
    } catch (error) {
      const revertFound = error.message.search('tx already executed') >= 0;
      assert(revertFound, `Expected "tx already executed" error but got ${error} instead`);
    }
  });
});
