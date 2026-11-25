const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth");

// POST /auth/signup
router.post("/signup", AuthController.signup);

// POST /auth/login
router.post("/login", AuthController.login);

// POST /auth/refresh - Refresh access token
router.post("/refresh", AuthController.refresh);

// POST /auth/logout - Logout and invalidate refresh token
router.post("/logout", AuthController.logout);

// POST /auth/logout-all - Logout from all devices
router.post("/logout-all", authMiddleware, AuthController.logoutAll);

module.exports = router;
