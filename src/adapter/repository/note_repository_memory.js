const noteRepository = require("../../domain/repository/note_repository");
let notes = [];

function get(id) {
  return notes.find(notes => notes.id === id);
}

function update(notes) {
  const oldNote = get({ id:note.id });
  if(!oldNote) return;
  notes = notes.map(n => {
    if(n.id === note.id) return note;
    return n;
  });
}

function remove(id) {
  notes = notes.filter(note => id !== note.id);
}

function save(note) {
  notes.push(note);
}

module.exports = noteRepository.create({
  get,
  update,
  remove,
  save
});