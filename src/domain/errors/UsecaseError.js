class UsecaseInputError extends Error {
  constructor(name) {
    super(`${name} is required`);
  }
}

class UsecaseValidationError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = { UsecaseInputError, UsecaseValidationError }