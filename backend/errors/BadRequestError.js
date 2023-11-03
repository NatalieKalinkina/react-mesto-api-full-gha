const { BAD_REQUEST } = require('../constants');

module.exports = class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'BadRequestError';
    this.statusCode = BAD_REQUEST;
  }
};
