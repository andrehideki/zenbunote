const crypto = require('crypto');
const notebookRepositoryMemory = require('../../../src/adapter/repository/notebook_repository_memory');
const noteRepositoryMemory = require('../../../src/adapter/repository/note_repository_memory');
const addNoteUseCase = require('../../../src/domain/usecase/add_note')

const addNote = addNoteUseCase.create({
  IdGenerator: () => crypto.randomUUID(),
  NotebookRepository: notebookRepositoryMemory,
  NoteRepository: noteRepositoryMemory
});

describe('When Adding a note to system', () => {
  it('It should be successfully when all parameters are ok', () => {
    const note = addNote({
      title: "title",
      content: "content",
      notebook_id: '123',
    });
    expect(note.id).not.toBeNull();
  });

  it('It should throw an error if title is empty', () => {
    expect(() => addNote({
      title: '',
      content: "content",
      notebook_id: '123',
    }))
    .toThrow(Error('A title should be specified'));
  });

  it('It should save if are parameters are ok', () => {
    
  });
});
