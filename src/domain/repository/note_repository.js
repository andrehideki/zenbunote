const noteRepository = {
  create: ({ 
    save,
    update,
    get,
    remove
   }) => {
     return {
      save,
      update,
      get,
      remove
     }
   }
}

module.exports = { noteRepository };