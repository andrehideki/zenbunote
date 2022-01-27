class Notebook {
  constructor({
    id,
    title,
    description,
    user,
    createAt
  }={}) {
    if (!id) throw new Error("A id should be specified");
    if (!title) throw new Error("A title should be specified");
    if (!user) throw new Error("An user should be specified");
    this.id = id;
    this.title = title;
    this.description = description || "";
    this.user = user;
    this.createAt = createAt || new Date();
  }
}

module.exports = Notebook;
