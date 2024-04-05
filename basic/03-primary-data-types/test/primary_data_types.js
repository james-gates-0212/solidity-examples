const PrimaryDataTypesContract = artifacts.require('PrimaryDataTypes');

contract('Primary Data Types', (accounts) => {
  let contractInstance;

  before(async () => {
    contractInstance = await PrimaryDataTypesContract.deployed();
  });

  it('should display boolean `true`', async () => {
    const boo = await contractInstance.boo();
    assert.equal(boo, true, 'Incorrect initial value for boo');
  });

  it('should display uint8 `1`', async () => {
    const u8 = await contractInstance.u8();
    assert.equal(u8, 1, 'Incorrect initial value for u8');
  });

  it('should display uint256 `456`', async () => {
    const u256 = await contractInstance.u256();
    assert.equal(u256, 456, 'Incorrect initial value for u256');
  });

  it('should display uint `123`', async () => {
    const u = await contractInstance.u();
    assert.equal(u, 123, 'Incorrect initial value for u');
  });

  it('should display int8 `-1`', async () => {
    const i8 = await contractInstance.i8();
    assert.equal(i8, -1, 'Incorrect initial value for i8');
  });

  it('should display int256 `456`', async () => {
    const i256 = await contractInstance.i256();
    assert.equal(i256, 456, 'Incorrect initial value for i256');
  });

  it('should display int `-123`', async () => {
    const i = await contractInstance.i();
    assert.equal(i, -123, 'Incorrect initial value for i');
  });

  it('should display type(int256).min', async () => {
    const minInt = await contractInstance.minInt();
    assert.equal(minInt, -(2n ** 255n), 'Incorrect initial value for minInt');
  });

  it('should display type(int256).max', async () => {
    const maxInt = await contractInstance.maxInt();
    assert.equal(maxInt, 2n ** 255n - 1n, 'Incorrect initial value for maxInt');
  });

  it('should display address `0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c`', async () => {
    const addr = await contractInstance.addr();
    assert.equal(addr, '0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c', 'Incorrect initial value for addr');
  });

  it('should display byte1 `0xb5`', async () => {
    const a = await contractInstance.a();
    assert.equal(a, '0xb5', 'Incorrect initial value for a');
  });

  it('should display byte1 `0x56`', async () => {
    const b = await contractInstance.b();
    assert.equal(b, '0x56', 'Incorrect initial value for b');
  });

  it('should display default bool `false`', async () => {
    const defaultBoo = await contractInstance.defaultBoo();
    assert.equal(defaultBoo, false, 'Incorrect default value for defaultBoo');
  });

  it('should display default uint256 `0`', async () => {
    const defaultUint = await contractInstance.defaultUint();
    assert.equal(defaultUint, 0, 'Incorrect default value for defaultUint');
  });

  it('should display default int256 `0`', async () => {
    const defaultInt = await contractInstance.defaultInt();
    assert.equal(defaultInt, 0, 'Incorrect default value for defaultInt');
  });

  it('should display default address `0x0000000000000000000000000000000000000000`', async () => {
    const defaultAddr = await contractInstance.defaultAddr();
    assert.equal(defaultAddr, '0x0000000000000000000000000000000000000000', 'Incorrect default value for defaultAddr');
  });
});
