const APIResponse = require("../utils/response");
const logger = require("../utils/logger");
const { ERROR_MESSAGES } = require("../constants/http");

const errorHandler = (err, req, res, next) => {
  logger.error("Error caught by error handler:", err);

  if (err.name === "ValidationError") {
    return APIResponse.badRequest(res, "Validation error", err.errors);
  }

  if (err.name === "UnauthorizedError") {
    return APIResponse.unauthorized(res, ERROR_MESSAGES.UNAUTHORIZED);
  }

  if (err.status) {
    return APIResponse.error(res, err.message, err.status);
  }

  return APIResponse.serverError(res, ERROR_MESSAGES.SERVER_ERROR);
};

module.exports = errorHandler;
