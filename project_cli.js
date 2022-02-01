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

const usecase_body = `
const DependencyError = require('../errors/DependencyError');
const { UsecaseInputError, UsecaseValidationError } = require('../errors/UsecaseError');

const ${usecaseName}_usecase = {
    
    create: ({ IdGenerator, NotebookRepository, NoteRepository }) => {
      return ${usecaseName}_usecase.execute;
    },

    execute: ({ params }) => {
      return {};
    }
  }

module.exports = ${usecaseName}_usecase;
`;

const usecase_test_body = `
const crypto = require('crypto');
const addNotebookUseCase = require('../../../src/domain/usecase/${usecaseName}');

describe('When ...', () => {
  it('It should test', () => {
    expect(1).toBe(1);
  })
});
`;

fs.writeFile(path.join(usecase_folder, `${usecaseName}.js`), usecase_body, () => console.log('usecase file has been created.'));
fs.writeFile(path.join(usecase_test_folder, `${usecaseName}.test.js`), usecase_test_body, () => console.log('usecase test file has been created.'));