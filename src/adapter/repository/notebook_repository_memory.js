const notebookRepository = require("../../domain/repository/notebook_repository");
let notebooks = [];

function get(id) {
  return notebooks.find(notebook => notebook.id === id);
}
function update(notebook) {
  const oldNotebook = get({id:notebook.id});
  if(!oldNotebook) return;
  notebooks = notebooks.map(nb => {
    if(nb.id === notebook.id) return notebook;
    return nb;
  });
}

function remove(id) {
  notebooks = notebooks.filter(notebook => id !== notebook.id);
}

function save(notebook) {
  notebooks.push(notebook);
}

module.exports = notebookRepository.create({
  get,
  update,
  remove,
  save
});