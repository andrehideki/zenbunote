class UsecaseInputError extends Error {
  constructor(name) {
    super(`${name} is required`);
  }
}

module.exports = { UsecaseInputError }