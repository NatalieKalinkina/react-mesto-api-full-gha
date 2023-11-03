const { CONFLICT } = require('../constants');

module.exports = class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ConflictError';
    this.statusCode = CONFLICT;
  }
};
