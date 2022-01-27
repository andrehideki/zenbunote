class DependencyError extends Error {
  constructor(name) {
    super(`The ${name} should be specified`)
  }
}

module.exports = DependencyError