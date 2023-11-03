const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const SERVER_ERROR = 500;
const OK = 200;
const CREATED = 201;
const UNAUTHORIZED = 401;
const CONFLICT = 409;
const FORBIDDEN = 403;

// eslint-disable-next-line
const URL_REGEXP = /^https?\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/im;

module.exports = {
  BAD_REQUEST,
  NOT_FOUND,
  SERVER_ERROR,
  OK,
  CREATED,
  URL_REGEXP,
  UNAUTHORIZED,
  CONFLICT,
  FORBIDDEN,
};
