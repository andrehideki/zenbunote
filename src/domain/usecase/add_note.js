const DependencyError = require('../errors/DependencyError');

const add_note_usecase = {
  
  create: ({ IdGenerator, NotebookRepository }) => {
    if (!IdGenerator) throw new DependencyError('IdGenerator');
    if (!NotebookRepository) throw new DependencyError('NotebookRepository');
    return add_note_usecase.execute;
  },

  execute: ({ title, content, notebook_id, user }) => {
    
  }
}

module.exports = add_note_usecase