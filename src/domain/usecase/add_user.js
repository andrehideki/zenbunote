
const DependencyError = require('../errors/DependencyError');
const { UsecaseInputError, UsecaseValidationError } = require('../errors/UsecaseError');

const addUserUsecase = {
    
    create: ({ IdGenerator, NotebookRepository, NoteRepository }) => {
      return addUserUsecase.execute;
    },

    execute: ({ params }) => {
      return {};
    }
  }

module.exports = addUserUsecase.execute;
