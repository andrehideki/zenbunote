const addNotebookUseCase = {
  create: ({ IdGenerator, Err, NotebookRepository }) => {
    if (!Err) Err = Error;
    if (!IdGenerator) throw new Err("An Id generator function should be specified");
    return function ({ id, title, description, user } = {}) {
      if (!id) id = IdGenerator(id);
      if (!title) throw new Err("A title should be specified");
      if (!user) throw new Err("An user should be specified");
      return {
        id,
        title,
        description,
        user,
      };
    };
  },
};
module.exports = addNotebookUseCase;
