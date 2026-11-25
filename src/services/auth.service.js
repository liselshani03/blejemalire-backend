const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/database");
const { JWT_SECRET, JWT_EXPIRE, BCRYPT_ROUNDS } = require("../config/environment");
const logger = require("../utils/logger");
const crypto = require("crypto");

class AuthService {
  static async findUserByEmail(email) {
    try {
      const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      return result.rows[0] || null;
    } catch (err) {
      logger.error("Error finding user by email", err);
      throw err;
    }
  }

  static async findUserById(userId) {
    try {
      const result = await pool.query("SELECT * FROM users WHERE id = $1", [userId]);
      return result.rows[0] || null;
    } catch (err) {
      logger.error("Error finding user by id", err);
      throw err;
    }
  }

  static async createUser(email, password) {
    try {
      const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);
      const result = await pool.query(
        "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email, created_at",
        [email, hashedPassword]
      );
      return result.rows[0];
    } catch (err) {
      logger.error("Error creating user", err);
      throw err;
    }
  }

  static async verifyPassword(plainPassword, hashedPassword) {
    try {
      return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (err) {
      logger.error("Error verifying password", err);
      throw err;
    }
  }

  // Generate Access Token (short-lived: 15 minutes)
  static generateAccessToken(userId, email, role = "user") {
    try {
      return jwt.sign(
        {
          id: userId,
          email,
          role,
          type: "access",
        },
        JWT_SECRET,
        {
          expiresIn: "15m",
        }
      );
    } catch (err) {
      logger.error("Error generating access token", err);
      throw err;
    }
  }

  // Generate Refresh Token (long-lived: 7 days)
  static generateRefreshToken(userId, email, role = "user") {
    try {
      return jwt.sign(
        {
          id: userId,
          email,
          role,
          type: "refresh",
        },
        JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
    } catch (err) {
      logger.error("Error generating refresh token", err);
      throw err;
    }
  }

  // Old method for backward compatibility - returns access token
  static generateToken(userId, email) {
    return this.generateAccessToken(userId, email);
  }

  // Store refresh token in database
  static async storeRefreshToken(userId, refreshToken) {
    try {
      const decoded = jwt.verify(refreshToken, JWT_SECRET);
      const expiresAt = new Date(decoded.exp * 1000);

      const result = await pool.query(
        "INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES ($1, $2, $3) RETURNING id",
        [userId, refreshToken, expiresAt]
      );

      logger.info(`Refresh token stored for user ${userId}`);
      return result.rows[0];
    } catch (err) {
      logger.error("Error storing refresh token", err);
      throw err;
    }
  }

  // Verify refresh token exists and is valid
  static async verifyRefreshToken(refreshToken) {
    try {
      // Verify JWT signature
      const decoded = jwt.verify(refreshToken, JWT_SECRET);

      // Check if token exists in database
      const result = await pool.query(
        "SELECT * FROM refresh_tokens WHERE token = $1 AND expires_at > NOW()",
        [refreshToken]
      );

      if (result.rows.length === 0) {
        throw new Error("Refresh token not found or expired");
      }

      return decoded;
    } catch (err) {
      logger.error("Error verifying refresh token", err);
      throw err;
    }
  }

  // Invalidate refresh token (logout)
  static async invalidateRefreshToken(refreshToken) {
    try {
      await pool.query("DELETE FROM refresh_tokens WHERE token = $1", [refreshToken]);
      logger.info("Refresh token invalidated");
    } catch (err) {
      logger.error("Error invalidating refresh token", err);
      throw err;
    }
  }

  // Invalidate all refresh tokens for a user (logout all devices)
  static async invalidateAllRefreshTokens(userId) {
    try {
      await pool.query("DELETE FROM refresh_tokens WHERE user_id = $1", [userId]);
      logger.info(`All refresh tokens invalidated for user ${userId}`);
    } catch (err) {
      logger.error("Error invalidating all refresh tokens", err);
      throw err;
    }
  }
}

module.exports = AuthService;
