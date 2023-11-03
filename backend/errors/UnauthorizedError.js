const { UNAUTHORIZED } = require('../constants');

module.exports = class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedError';
    this.statusCode = UNAUTHORIZED;
  }
};
