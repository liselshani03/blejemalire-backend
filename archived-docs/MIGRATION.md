# Migration Guide - Refactored Architecture

## Overview

The Blejemalire backend has been completely refactored into a professional, enterprise-grade architecture. This guide explains the changes and how to migrate from the old structure.

## What Changed

### Old Structure → New Structure

```
OLD                          →    NEW
routes/                      →    src/routes/
middleware/                  →    src/middleware/
data/                        →    (removed - use services)
index.js                     →    src/server.js
db.js                        →    src/config/database.js
```

### New Additions

- `src/controllers/` - Business logic for handling requests
- `src/services/` - Data access and complex operations
- `src/validators/` - Input validation
- `src/utils/` - Helper utilities (response formatting, logging)
- `src/constants/` - Shared constants and HTTP status codes
- `src/config/` - Configuration management
- `src/app.js` - Express app setup

## Key Architecture Improvements

### 1. **Separation of Concerns**

```
Request Flow:
Route → Middleware → Controller → Service → Database
```

Each layer has a specific responsibility:
- **Routes**: Define endpoints
- **Controllers**: Handle HTTP requests/responses
- **Services**: Business logic and database queries
- **Middleware**: Cross-cutting concerns (auth, error handling)
- **Validators**: Input validation
- **Utils**: Helper functions

### 2. **Response Format**

All responses now follow a consistent format:

```json
{
  "success": true,
  "message": "Success message",
  "data": {},
  "timestamp": "2026-06-19T10:30:00.000Z"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message",
  "errors": {},
  "timestamp": "2026-06-19T10:30:00.000Z"
}
```

### 3. **Configuration Management**

Environment variables are now centralized in `src/config/environment.js`:

```javascript
// Old way
const secret = "hardcoded-key";

// New way
const { JWT_SECRET } = require("./config/environment");
```

### 4. **Logging**

Integrated logger throughout the application:

```javascript
const logger = require("./utils/logger");

logger.info("User logged in", { userId: 123 });
logger.error("Database error", error);
logger.warn("Deprecated feature used");
logger.debug("Debug info", data);
```

### 5. **Input Validation**

Centralized validators with consistent error responses:

```javascript
// Before
if (!email || !password) {
  return res.status(400).json({ error: "Missing fields" });
}

// After
const validation = validateSignup(email, password);
if (!validation.isValid) {
  return APIResponse.badRequest(res, "Validation failed", validation.errors);
}
```

## Entry Point Change

### Old
```bash
npm start  # runs index.js
```

### New
```bash
npm start  # runs src/server.js
npm run dev  # runs src/server.js with nodemon
```

## API Routes Change

### Old Format
```
/auth/signup
/auth/login
/products
/cart
```

### New Format
```
/api/auth/signup
/api/auth/login
/api/products
/api/products/search
/api/products/store/:id
/api/cart
```

**Note:** All routes now have `/api` prefix for better organization

## Service Layer Examples

### Product Service

```javascript
// Before - Logic in route
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
});

// After - Logic in service
const products = await ProductService.getAllProducts(filters);
return APIResponse.success(res, products, message);
```

## Error Handling

### Before
```javascript
try {
  // code
} catch (err) {
  console.log(err);
  res.status(500).json({ error: "Server error" });
}
```

### After
```javascript
try {
  // code
} catch (err) {
  logger.error("Operation failed", err);
  return APIResponse.serverError(res);
}
```

## Database Connection

### Before
```javascript
const pool = require("./db");
```

### After
```javascript
const pool = require("./config/database");
```

## Authentication Middleware

### Before
```javascript
const jwt = require("jsonwebtoken");
const JWT_SECRET = "supersecretkey";

function authMiddleware(req, res, next) {
  // manual implementation
}
```

### After
```javascript
const authMiddleware = require("./middleware/auth");

// Usage in routes
router.post("/protected", authMiddleware, controller.handler);
```

## Breaking Changes

1. **API Routes**: All routes now require `/api` prefix
2. **Response Format**: Changed to consistent `{ success, message, data }` format
3. **Entry Point**: Changed from `index.js` to `src/server.js`
4. **Configuration**: Must set environment variables in `.env`
5. **Database**: Credentials must be in environment variables

## Migration Checklist

- [ ] Update `.env` file with database credentials
- [ ] Update client API calls to use `/api` prefix
- [ ] Install new dev dependency: `npm install --save-dev nodemon`
- [ ] Test all endpoints with new response format
- [ ] Update error handling in frontend
- [ ] Remove old files: `routes/`, `middleware/` (old), `data/`, `db.js`
- [ ] Update deployment configuration

## Backward Compatibility

The old `index.js` file is kept for backward compatibility but is **deprecated**. It logs a warning on startup. Use `src/server.js` instead.

## Benefits of New Architecture

✅ **Scalable** - Easy to add new features
✅ **Maintainable** - Clear separation of concerns
✅ **Testable** - Each layer can be tested independently
✅ **Consistent** - Unified response format and error handling
✅ **Professional** - Industry-standard architecture
✅ **Documented** - Comprehensive logging and error messages
✅ **Configurable** - Environment-based configuration
✅ **Secure** - Centralized validation and authentication

## Questions?

For more details, see:
- [README.md](./README.md) - Full API documentation
- [src/app.js](./src/app.js) - Express app configuration
- [src/controllers/](./src/controllers/) - Request handlers
- [src/services/](./src/services/) - Business logic

---

**Happy coding! 🚀**
