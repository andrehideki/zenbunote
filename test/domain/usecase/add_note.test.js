const crypto = require('crypto');
const notebookRepositoryMemory = require('../../../src/adapter/repository/notebook_repository_memory');
const noteRepositoryMemory = require('../../../src/adapter/repository/note_repository_memory');
const Notebook = require('../../../src/domain/entity/notebook');
const addNoteUseCase = require('../../../src/domain/usecase/add_note')

const notebook = new Notebook({ 
  id: '123',
  title: "title",
  description: "",
  user: 'fulano'
});

const addNote = addNoteUseCase.create({
  IdGenerator: () => crypto.randomBytes(20).toString('hex'),
  NotebookRepository: notebookRepositoryMemory,
  NoteRepository: noteRepositoryMemory
});

beforeAll(() => {
  notebookRepositoryMemory.save(notebook);
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
    const note = addNote({
      title: "title",
      content: "content",
      notebook_id: notebook.id,
    })
    expect(noteRepositoryMemory.get(note.id)).toEqual(note);
    
    
  });
});
