// Import the contract artifacts and the necessary modules
const Import = artifacts.require('Import');
const Foo = artifacts.require('Foo');

contract('Import', (accounts) => {
  let importInstance;
  let fooInstance;

  beforeEach(async () => {
    // Deploy the Foo contract
    fooInstance = await Foo.new();
    // Deploy the Import contract and pass the address of the Foo contract
    importInstance = await Import.new(fooInstance.address);
  });

  it('should import and interact with Foo contract', async () => {
    // Call getFooName to retrieve the name of the Foo contract
    const fooName = await importInstance.getFooName();
    assert.equal(fooName, 'Foo', 'Expected Foo contract name to be "Foo Contract"');
  });
});
