const addNotebook = require('../../../src/domain/usecase/add_notebook')

test('add a new usecase', () => {
  parameters = {
    title: 'title',
    description: '',
    user: 'fulano'
  }
  addNotebook({ notebookReporitory: null }, parameters)
})