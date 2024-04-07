const SendEther = artifacts.require('SendEther');
const ReceiveEther = artifacts.require('ReceiveEther');

contract('SendEther', (accounts) => {
  let sendEther;
  let receiveEther;

  beforeEach(async () => {
    sendEther = await SendEther.new();
    receiveEther = await ReceiveEther.new();
  });

  it('should send Ether via transfer', async () => {
    const initialBalance = await web3.eth.getBalance(receiveEther.address);
    const amountToSend = web3.utils.toWei('1', 'ether');

    await sendEther.sendViaTransfer(receiveEther.address, { value: amountToSend });

    const newBalance = await web3.eth.getBalance(receiveEther.address);

    assert.equal(
      newBalance.toString(),
      (BigInt(initialBalance) + BigInt(amountToSend)).toString(),
      'Ether not transferred correctly',
    );
  });

  it('should send Ether via send', async () => {
    const initialBalance = await web3.eth.getBalance(receiveEther.address);
    const amountToSend = web3.utils.toWei('1', 'ether');

    await sendEther.sendViaSend(receiveEther.address, { value: amountToSend });

    const newBalance = await web3.eth.getBalance(receiveEther.address);

    assert.equal(
      newBalance.toString(),
      (BigInt(initialBalance) + BigInt(amountToSend)).toString(),
      'Ether not sent correctly',
    );
  });

  it('should send Ether via call', async () => {
    const initialBalance = await web3.eth.getBalance(receiveEther.address);
    const amountToSend = web3.utils.toWei('1', 'ether');

    await sendEther.sendViaCall(receiveEther.address, { value: amountToSend });

    const newBalance = await web3.eth.getBalance(receiveEther.address);

    assert.equal(
      newBalance.toString(),
      (BigInt(initialBalance) + BigInt(amountToSend)).toString(),
      'Ether not sent correctly',
    );
  });
});
