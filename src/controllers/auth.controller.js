const AuthService = require("../services/auth.service");
const APIResponse = require("../utils/response");
const { ERROR_MESSAGES, SUCCESS_MESSAGES } = require("../constants/http");
const { validateSignup, validateLogin } = require("../validators/auth.validator");
const logger = require("../utils/logger");

class AuthController {
  static async signup(req, res) {
    try {
      const { email, password } = req.body;

      // Validate input
      const validation = validateSignup(email, password);
      if (!validation.isValid) {
        logger.warn("Signup validation failed", validation.errors);
        return APIResponse.badRequest(res, "Validation failed", validation.errors);
      }

      // Check if user exists
      const existingUser = await AuthService.findUserByEmail(email);
      if (existingUser) {
        logger.warn(`Signup attempt with existing email: ${email}`);
        return APIResponse.conflict(res, ERROR_MESSAGES.EMAIL_ALREADY_EXISTS);
      }

      // Create user
      const newUser = await AuthService.createUser(email, password);
      logger.info(`New user created: ${email}`);

      return APIResponse.created(res, { user: newUser }, SUCCESS_MESSAGES.SIGNUP_SUCCESSFUL);
    } catch (err) {
      logger.error("Signup error", err);
      return APIResponse.serverError(res);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      // Validate input
      const validation = validateLogin(email, password);
      if (!validation.isValid) {
        logger.warn("Login validation failed", validation.errors);
        return APIResponse.badRequest(res, "Validation failed", validation.errors);
      }

      // Find user
      const user = await AuthService.findUserByEmail(email);
      if (!user) {
        logger.warn(`Login attempt with non-existent email: ${email}`);
        return APIResponse.error(res, ERROR_MESSAGES.INVALID_CREDENTIALS, 400);
      }

      // Verify password
      const validPassword = await AuthService.verifyPassword(password, user.password);
      if (!validPassword) {
        logger.warn(`Failed login attempt for user: ${email}`);
        return APIResponse.error(res, ERROR_MESSAGES.INVALID_CREDENTIALS, 400);
      }

      // Determine user role (default to "user" if role_id is not found)
      let userRole = "user";
      if (user.role_id === 1) {
        userRole = "admin";
      }

      // Generate access and refresh tokens with role included
      const accessToken = AuthService.generateAccessToken(user.id, user.email, userRole);
      const refreshToken = AuthService.generateRefreshToken(user.id, user.email, userRole);

      // Store refresh token in database
      await AuthService.storeRefreshToken(user.id, refreshToken);

      logger.info(`User logged in: ${email}`);

      return APIResponse.success(
        res,
        {
          accessToken,
          refreshToken,
          user: {
            id: user.id,
            email: user.email,
            role: userRole,
          },
        },
        SUCCESS_MESSAGES.LOGIN_SUCCESSFUL
      );
    } catch (err) {
      logger.error("Login error", err);
      return APIResponse.serverError(res);
    }
  }

  static async refresh(req, res) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        logger.warn("Refresh token not provided");
        return APIResponse.badRequest(res, "Refresh token is required");
      }

      // Verify refresh token
      const decoded = await AuthService.verifyRefreshToken(refreshToken);

      // Find user
      const user = await AuthService.findUserById(decoded.id);
      if (!user) {
        logger.warn("User not found during refresh");
        return APIResponse.error(res, "User not found", 400);
      }

      // Determine user role (use decoded role from refresh token, or default to "user")
      const userRole = decoded.role || "user";

      // Generate new access token with role
      const newAccessToken = AuthService.generateAccessToken(user.id, user.email, userRole);

      logger.info(`Access token refreshed for user: ${user.email}`);

      return APIResponse.success(
        res,
        {
          accessToken: newAccessToken,
        },
        "Access token refreshed"
      );
    } catch (err) {
      logger.error("Token refresh error", err);
      return APIResponse.error(res, "Invalid or expired refresh token", 401);
    }
  }

  static async logout(req, res) {
    try {
      const { refreshToken } = req.body;

      if (refreshToken) {
        // Invalidate the refresh token
        await AuthService.invalidateRefreshToken(refreshToken);
      }

      logger.info(`User logged out`);

      return APIResponse.success(res, {}, "Logged out successfully");
    } catch (err) {
      logger.error("Logout error", err);
      return APIResponse.serverError(res);
    }
  }

  static async logoutAll(req, res) {
    try {
      const userId = req.user.id;

      // Invalidate all refresh tokens for this user
      await AuthService.invalidateAllRefreshTokens(userId);

      logger.info(`User ${userId} logged out from all devices`);

      return APIResponse.success(res, {}, "Logged out from all devices");
    } catch (err) {
      logger.error("Logout all error", err);
      return APIResponse.serverError(res);
    }
  }
}

module.exports = AuthController;
