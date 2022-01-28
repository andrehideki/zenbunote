class Note {
  
  constructor({ id, title, content, notebook_id, createdAt, updatedAt }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.notebook_id = notebook_id;
    this.createdAt = createdAt || Date.now();
    this.updatedAt = updatedAt;
  }
}

module.exports = Note;