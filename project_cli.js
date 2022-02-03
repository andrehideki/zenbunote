const fs = require('fs');
const path = require('path');

const usecaseParam = process.argv.find(param => param.includes('--name='))
const usecaseName = usecaseParam.split('=')[1];

if (!usecaseName) {
  console.error('The parameter --name is empty');
  return;
}

const usecase_folder = 'src/domain/usecase';
const usecase_test_folder = 'test/domain/usecase';

const splitedUsecaseName = usecaseName.split('_');
let camelCaseUsecaseName = '';
splitedUsecaseName.forEach((value, index) => {
  if (index) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  camelCaseUsecaseName += value;
});
const usecase_body = `
const DependencyError = require('../errors/DependencyError');
const { UsecaseInputError, UsecaseValidationError } = require('../errors/UsecaseError');

const ${camelCaseUsecaseName}Usecase = {
    
    create: ({ IdGenerator, NotebookRepository, NoteRepository }) => {
      return ${camelCaseUsecaseName}Usecase.execute;
    },

    execute: ({ params }) => {
      return {};
    }
  }

module.exports = ${camelCaseUsecaseName}Usecase.execute;
`;

const usecase_test_body = `
const crypto = require('crypto');
const ${camelCaseUsecaseName}Usecase = require('../../../src/domain/usecase/${camelCaseUsecaseName}Usecase');

describe('When ...', () => {
  it('It should test', () => {
    expect(1).toBe(1);
  })
});
`;

fs.writeFile(path.join(usecase_folder, `${usecaseName}.js`), usecase_body, () => console.log('usecase file has been created.'));
fs.writeFile(path.join(usecase_test_folder, `${usecaseName}.test.js`), usecase_test_body, () => console.log('usecase test file has been created.'));