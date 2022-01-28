class Note {
  
  constructor({ id, title, content, notebook_id, createdAt, updatedAt }) {
    if (!id) throw new Error('An id should be specified');
    if (!title) throw new Error('A title should be specified');
    if (!notebook_id) throw new Error('A notebook_id should be specified');
    this.id = id;
    this.title = title;
    this.content = content;
    this.notebook_id = notebook_id;
    this.createdAt = createdAt || Date.now();
    this.updatedAt = updatedAt;
  }
}

module.exports = Note;