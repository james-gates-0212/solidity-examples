// Import the contract artifacts
const AbiEncode = artifacts.require('AbiEncode');

contract('AbiEncode', (accounts) => {
  it('should test the ABI encoding and function calls', async () => {
    const abiEncodeInstance = await AbiEncode.deployed();

    // Test encodeWithSignature function
    const data1 = await abiEncodeInstance.encodeWithSignature(accounts[1], 100);
    console.log('Encoded data with signature:', data1);

    // Test encodeWithSelector function
    const data2 = await abiEncodeInstance.encodeWithSelector(accounts[2], 200);
    console.log('Encoded data with selector:', data2);

    // Test encodeCall function
    const data3 = await abiEncodeInstance.encodeCall(accounts[3], 300);
    console.log('Encoded data for function call:', data3);
  });
});
