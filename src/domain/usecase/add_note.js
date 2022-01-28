const DependencyError = require('../errors/DependencyError');
const { UsecaseInputError } = require('../errors/UsecaseError');
const Note = require('../../../src/domain/entity/note');

const add_note_usecase = {
  
  create: ({ IdGenerator, NotebookRepository, NoteRepository }) => {
    if (!IdGenerator) throw new DependencyError('IdGenerator');
    if (!NotebookRepository) throw new DependencyError('NotebookRepository');
    if (!NoteRepository) throw new DependencyError('NoteRepository');
    this.IdGenerator = IdGenerator;
    this.NotebookRepository = NotebookRepository;
    this.NoteRepository = NoteRepository;
    return add_note_usecase.execute;
  },

  execute: ({ title, content, notebook_id, user }) => {
    const id = this.IdGenerator();
    const note = new Note({ id: id, title, content, notebook_id, user });
    return {
      id: note.id,
      title,
      content,
      notebook_id,
      createdAt: note.createdAt,
      user
    }
  }
}

module.exports = add_note_usecase