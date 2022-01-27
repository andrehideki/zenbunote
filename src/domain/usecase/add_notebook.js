const Notebook = require("../entity/notebook");

const addNotebookUseCase = {
  create: ({ IdGenerator, Err, NotebookRepository }) => {
    if (!Err) Err = Error;
    if (!IdGenerator) throw new Err("An Id generator function should be specified");
    return function ({ id, title, description, user } = {}) {
      const notebook = new Notebook({id: IdGenerator(), title, description, user});
      NotebookRepository.save(notebook);
      return {
        id: notebook.id,
        title: notebook.title,
        description: notebook.description,
        user: notebook.user,
        createAt: notebook.createAt
      };
    };
  },
};
module.exports = addNotebookUseCase;
