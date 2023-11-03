const { FORBIDDEN } = require('../constants');

module.exports = class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ForbiddenError';
    this.statusCode = FORBIDDEN;
  }
};
