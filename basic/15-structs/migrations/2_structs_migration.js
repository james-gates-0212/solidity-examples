const TodosContract = artifacts.require('Todos');
const TodosImportContract = artifacts.require('TodosImport');

module.exports = function (deployer) {
  deployer.deploy(TodosContract);
  deployer.deploy(TodosImportContract);
};
