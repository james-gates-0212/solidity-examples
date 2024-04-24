// Import the required dependencies
const MyNFT = artifacts.require('MyNFT');

contract('MyNFT', (accounts) => {
  let myNFT;

  beforeEach(async () => {
    // Deploy a new instance of the MyNFT contract before each test
    myNFT = await MyNFT.new();
  });

  it('should mint a new NFT', async () => {
    const tokenId = 1;
    const owner = accounts[0];

    // Mint a new NFT with tokenId and assign it to the owner
    await myNFT.mint(owner, tokenId);

    // Verify that the owner of the NFT is set correctly
    const actualOwner = await myNFT.ownerOf(tokenId);
    assert.equal(actualOwner, owner, 'Invalid owner');
  });

  it('should not allow burning an NFT by a non-owner', async () => {
    const tokenId = 1;
    const owner = accounts[0];
    const nonOwner = accounts[1];

    // Mint a new NFT with tokenId and assign it to the owner
    await myNFT.mint(owner, tokenId);

    // Try to burn the NFT using a non-owner account
    try {
      await myNFT.burn(tokenId, { from: nonOwner });
      assert.fail('Expected an exception to be thrown');
    } catch (error) {
      // Verify that an exception was thrown
      const expectedError = 'not owner';
      assert(error.message.includes(expectedError), `Expected error: ${expectedError}`);
    }
  });

  it('should burn an NFT by the owner', async () => {
    const tokenId = 1;
    const owner = accounts[0];

    // Mint a new NFT with tokenId and assign it to the owner
    await myNFT.mint(owner, tokenId);

    // Burn the NFT using the owner account
    await myNFT.burn(tokenId, { from: owner });

    // Verify that the NFT no longer exists
    try {
      await myNFT.ownerOf(tokenId);
      assert.fail('Expected an exception to be thrown');
    } catch (error) {
      // Verify that an exception was thrown
      const expectedError = "token doesn't exist";
      assert(error.message.includes(expectedError), `Expected error: ${expectedError}`);
    }
  });
});
