const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/environment");
const APIResponse = require("../utils/response");
const { ERROR_MESSAGES } = require("../constants/http");
const logger = require("../utils/logger");

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      logger.warn("Authorization header missing");
      return APIResponse.unauthorized(res, ERROR_MESSAGES.UNAUTHORIZED);
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      logger.warn("Token not provided");
      return APIResponse.unauthorized(res, ERROR_MESSAGES.UNAUTHORIZED);
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      logger.error("Token verification failed", err);
      return APIResponse.unauthorized(res, ERROR_MESSAGES.INVALID_TOKEN);
    }
  } catch (err) {
    logger.error("Auth middleware error", err);
    return APIResponse.serverError(res);
  }
};

module.exports = authMiddleware;
