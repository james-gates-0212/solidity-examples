const AbiDecode = artifacts.require('AbiDecode');

contract('AbiDecode', () => {
  let abiDecodeInstance;

  before(async () => {
    abiDecodeInstance = await AbiDecode.deployed();
  });

  it('should encode and decode values correctly', async () => {
    const x = 123;
    const addr = '0x1234567890123456789012345678901234567890';
    const arr = [1, 2, 3];
    const myStruct = {
      name: 'Test',
      nums: [10, 20],
    };

    const encodedData = await abiDecodeInstance.encode(x, addr, arr, myStruct);
    const decodedData = await abiDecodeInstance.decode(encodedData);

    const decodedX = decodedData.x.toNumber();
    const decodedAddr = decodedData.addr;
    const decodedArr = decodedData.arr.map((num) => num.toNumber());
    const decodedStruct = {
      name: decodedData.myStruct.name,
      nums: decodedData.myStruct.nums.map((num) => Number(num)),
    };

    assert.equal(decodedX, x, 'Decoded x does not match encoded x');
    assert.equal(decodedAddr, addr, 'Decoded address does not match encoded address');
    assert.deepEqual(decodedArr, arr, 'Decoded array does not match encoded array');
    assert.deepEqual(decodedStruct, myStruct, 'Decoded struct does not match encoded struct');
  });
});
