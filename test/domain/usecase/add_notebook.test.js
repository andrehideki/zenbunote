const crypto = require('crypto');
const notebookRepositoryMemory = require('../../../src/adapter/repository/notebook_repository_memory');
const addNotebookUseCase = require('../../../src/domain/usecase/add_notebook')

const addNotebook = addNotebookUseCase.create({
  IdGenerator: () => crypto.randomBytes(20).toString('hex'),
  Err: Error,
  NotebookRepository: notebookRepositoryMemory
});

describe('When Adding an notebook to system', () => {
  it('It should be successfully when all parameters are ok', () => {
    const notebook = addNotebook({
      title: "title",
      description: "",
      user: 'fulano'
    });
    expect(notebook.id).not.toBeNull();
    expect(notebook.title).toBe("title");
    expect(notebook.description).toBe("");
    expect(notebook.user).toBe("fulano");
  })
  it('It should thrown an exception when title is empty', () => {
    const notebook = () => addNotebook({
      title: "",
      description: "",
      user: 'fulano'
    });
    expect(notebook).toThrow(Error("A title should be specified"));
  })
  it('It should thrown an exception when user is null', () => {
    const notebook = () => addNotebook({
      title: "title",
      description: "",
      user: null
    });
    expect(notebook).toThrow(Error("An user should be specified"));
  })

  it('It should save if all parameters are correct', () => {
    const notebook = addNotebook({
      title: "title",
      description: "",
      user: 'fulano'
    });
    expect(notebook.createAt).toBeInstanceOf(Date);
    expect(notebook.id).not.toBeNull();
    const savedNotebook = notebookRepositoryMemory.get(notebook.id);    
    expect(savedNotebook.id).not.toBeNull();
    expect(notebook.createAt).toBe(savedNotebook.createAt);
  })



});
