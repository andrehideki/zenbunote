const notebookRepository = {
  create: ({
    save,
    update,
    get,
    remove
  }) => {
    return {
      save: ({notebook}) => save({notebook}),
      update: ({notebook}) => update({notebook}),
      get: ({id}) => get({id}),
      remove: ({id}) => remove({id})
    }
  }
}
module.exports = notebookRepository;
