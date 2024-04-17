// Import the contract artifacts and the necessary modules
const HashFunction = artifacts.require('HashFunction');
const GuessTheMagicWord = artifacts.require('GuessTheMagicWord');

contract('HashFunction', (accounts) => {
  let hashFunction;

  before(async () => {
    hashFunction = await HashFunction.deployed();
  });

  it('should compute the hash correctly', async () => {
    const result = await hashFunction.hash('Hello', 123, accounts[0]);
    assert.equal(
      result,
      '0xa8b97b9c09f76f8daa1420f6be821a36cbb38fe2297cac5cf801c827e7d5636d',
      'Hash computation is incorrect',
    );
  });

  it('should handle hash collision correctly', async () => {
    const result = await hashFunction.collision('AAA', 'BBB');
    assert.equal(
      result,
      '0xf6568e65381c5fc6a447ddf0dcb848248282b798b2121d9944a87599b7921358',
      'Hash collision handling is incorrect',
    );
  });
});

contract('GuessTheMagicWord', (accounts) => {
  let guessTheMagicWord;

  before(async () => {
    guessTheMagicWord = await GuessTheMagicWord.deployed();
  });

  it('should return true when the correct word is guessed', async () => {
    const result = await guessTheMagicWord.guess('Solidity');
    assert.equal(result, true, 'The correct word was not guessed');
  });

  it('should return false when an incorrect word is guessed', async () => {
    const result = await guessTheMagicWord.guess('Incorrect');
    assert.equal(result, false, 'An incorrect word was guessed');
  });
});
