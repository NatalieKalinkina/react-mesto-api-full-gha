const { NOT_FOUND } = require('../constants');

module.exports = class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = NOT_FOUND;
  }
};
