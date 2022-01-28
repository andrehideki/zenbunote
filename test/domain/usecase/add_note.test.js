const crypto = require('crypto');
const notebookRepositoryMemory = require('../../../src/adapter/repository/notebook_repository_memory');
const addNoteUseCase = require('../../../src/domain/usecase/add_note')

const addNote = addNoteUseCase.create({
  IdGenerator: () => crypto.randomUUID(),
  NotebookRepository: notebookRepositoryMemory
});

describe('When Adding a note to system', () => {
  it('It should be successfully when all parameters are ok', () => {
    const note = addNote({
      title: "title",
      content: "content",
      user: 'fulano'
    });
    expect(note.id).not.toBeNull();
  });
});
