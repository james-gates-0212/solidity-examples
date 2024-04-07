const Payable = artifacts.require('Payable');

contract('Payable', (accounts) => {
  let payableContract;
  const owner = accounts[0];
  const receiver = accounts[1];

  beforeEach(async () => {
    payableContract = await Payable.new({ from: owner, value: web3.utils.toWei('1', 'ether') });
  });

  it('should deposit Ether into the contract', async () => {
    const initialBalance = await web3.eth.getBalance(payableContract.address);
    const amountToDeposit = web3.utils.toWei('0.5', 'ether');

    await payableContract.deposit({ from: owner, value: amountToDeposit });

    const newBalance = await web3.eth.getBalance(payableContract.address);

    assert.equal(
      newBalance.toString(),
      (BigInt(initialBalance) + BigInt(amountToDeposit)).toString(),
      'Ether not deposited correctly',
    );
  });

  it('should not allow calling notPayable function with Ether', async () => {
    try {
      await payableContract.notPayable({ from: owner, value: web3.utils.toWei('1', 'ether') });
      assert.fail('Expected an error but function executed successfully.');
    } catch (error) {
      assert.include(
        error.message,
        'VM Exception while processing transaction: revert',
        'Function notPayable allowed Ether transfer',
      );
    }
  });

  it('should allow the owner to withdraw all Ether', async () => {
    const initialContractBalance = await web3.eth.getBalance(payableContract.address);
    const initialOwnerBalance = await web3.eth.getBalance(owner);

    await payableContract.withdraw({ from: owner });

    const newContractBalance = await web3.eth.getBalance(payableContract.address);
    const newOwnerBalance = await web3.eth.getBalance(owner);

    assert.equal(newContractBalance.toString(), '0', 'Contract balance not zero after withdrawal');
    assert.isTrue(
      BigInt(newOwnerBalance) > BigInt(initialOwnerBalance),
      'Owner balance did not increase after withdrawal',
    );
  });

  it('should transfer Ether from the contract to a receiver', async () => {
    const initialContractBalance = await web3.eth.getBalance(payableContract.address);
    const initialReceiverBalance = await web3.eth.getBalance(receiver);
    const amountToTransfer = web3.utils.toWei('0.5', 'ether');

    await payableContract.transfer(receiver, amountToTransfer, { from: owner });

    const newContractBalance = await web3.eth.getBalance(payableContract.address);
    const newReceiverBalance = await web3.eth.getBalance(receiver);

    assert.equal(
      newContractBalance.toString(),
      (BigInt(initialContractBalance) - BigInt(amountToTransfer)).toString(),
      'Ether not transferred correctly from the contract',
    );

    assert.equal(
      newReceiverBalance.toString(),
      (BigInt(initialReceiverBalance) + BigInt(amountToTransfer)).toString(),
      'Ether not transferred correctly to the receiver',
    );
  });
});
