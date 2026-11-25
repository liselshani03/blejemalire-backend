require("dotenv").config();

console.log("\n=== Testing Route Loading ===\n");

try {
  console.log("1. Loading auth controller...");
  const AuthController = require("./src/controllers/auth.controller");
  console.log("   ✓ Auth controller loaded");
  console.log("   Methods:", Object.getOwnPropertyNames(AuthController).filter(m => m !== 'length' && m !== 'prototype'));
} catch (e) {
  console.log("   ✗ Error:", e.message);
  process.exit(1);
}

try {
  console.log("\n2. Loading auth middleware...");
  const authMiddleware = require("./src/middleware/auth");
  console.log("   ✓ Auth middleware loaded");
} catch (e) {
  console.log("   ✗ Error:", e.message);
  process.exit(1);
}

try {
  console.log("\n3. Loading auth routes...");
  const authRoutes = require("./src/routes/auth.routes");
  console.log("   ✓ Auth routes loaded");
} catch (e) {
  console.log("   ✗ Error:", e.message);
  process.exit(1);
}

try {
  console.log("\n4. Loading admin routes...");
  const adminRoutes = require("./src/routes/admin.routes");
  console.log("   ✓ Admin routes loaded");
} catch (e) {
  console.log("   ✗ Error:", e.message);
  process.exit(1);
}

try {
  console.log("\n5. Loading app...");
  const app = require("./src/app");
  console.log("   ✓ App loaded");
} catch (e) {
  console.log("   ✗ Error:", e.message);
  console.log("   Stack:", e.stack);
  process.exit(1);
}

console.log("\n=== All routes loaded successfully! ===\n");
