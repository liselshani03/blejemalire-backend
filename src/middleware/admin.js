const APIResponse = require("../utils/response");
const logger = require("../utils/logger");
const pool = require("../config/database");

// Check if user is admin (must be used after authMiddleware)
const adminMiddleware = async (req, res, next) => {
  try {
    // User should already be authenticated by authMiddleware
    if (!req.user) {
      logger.warn("No user in request");
      return APIResponse.unauthorized(res, "Authentication required");
    }

    // Fetch user with role from database
    const result = await pool.query(
      `SELECT u.id, u.email, r.name as role 
       FROM users u 
       LEFT JOIN roles r ON u.role_id = r.id 
       WHERE u.id = $1`,
      [req.user.id]
    );

    if (result.rows.length === 0) {
      logger.warn(`User ${req.user.id} not found`);
      return APIResponse.error(res, "User not found", 404);
    }

    const user = result.rows[0];
    req.user.role = user.role;

    // Check if admin
    if (user.role !== "admin") {
      logger.warn(`Access denied for non-admin user: ${req.user.email}`);
      return APIResponse.error(res, "Admin access required", 403);
    }

    next();
  } catch (err) {
    logger.error("Admin middleware error", err);
    return APIResponse.serverError(res);
  }
};

module.exports = adminMiddleware;
