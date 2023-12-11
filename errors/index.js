const BadRequestError = require('./bad-request');
const NotFoundError = require('./not-found');
const UnauthenticatedError = require('./unauthenticated');
const UnauthorizedError = require('./unauthorized');
const CustomError = require('./custom-api')

module.exports = {BadRequestError,NotFoundError,UnauthenticatedError,UnauthorizedError,CustomError};