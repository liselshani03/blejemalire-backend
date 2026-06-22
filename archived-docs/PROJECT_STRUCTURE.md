# 📁 Complete Project Structure

```
blejemalire-backend/
│
├── 📄 src/                              # Main application directory
│   │
│   ├── 🔧 config/                       # Configuration management
│   │   ├── database.js                  # Database connection pool
│   │   └── environment.js               # Environment variables
│   │
│   ├── 🎮 controllers/                  # Request handlers
│   │   ├── auth.controller.js           # Auth logic
│   │   ├── product.controller.js        # Product logic
│   │   └── cart.controller.js           # Cart logic
│   │
│   ├── 🔄 services/                     # Business logic layer
│   │   ├── auth.service.js              # Auth operations
│   │   ├── product.service.js           # Product operations
│   │   └── cart.service.js              # Cart operations
│   │
│   ├── 🛡️ middleware/                   # Express middleware
│   │   ├── auth.js                      # JWT authentication
│   │   └── errorHandler.js              # Global error handler
│   │
│   ├── 🛣️ routes/                       # API routes
│   │   ├── auth.routes.js               # Auth endpoints
│   │   ├── product.routes.js            # Product endpoints
│   │   └── cart.routes.js               # Cart endpoints
│   │
│   ├── ✅ validators/                   # Input validation
│   │   ├── auth.validator.js            # Auth validation
│   │   └── cart.validator.js            # Cart validation
│   │
│   ├── 🛠️ utils/                        # Utility functions
│   │   ├── response.js                  # Response formatting
│   │   └── logger.js                    # Logging utility
│   │
│   ├── 📋 constants/                    # Application constants
│   │   └── http.js                      # HTTP status & messages
│   │
│   ├── 🎯 app.js                        # Express app setup
│   └── 🚀 server.js                     # Server entry point
│
├── 📚 Documentation
│   ├── README.md                        # Complete API documentation
│   ├── QUICKSTART.md                    # Quick start guide
│   ├── MIGRATION.md                     # Migration from old structure
│   ├── REFACTOR_SUMMARY.md              # Refactoring summary
│   ├── API_EXAMPLES.md                  # API request examples
│   └── PROJECT_STRUCTURE.md             # This file
│
├── 🔨 Configuration
│   ├── package.json                     # Project dependencies
│   ├── .env.example                     # Environment template
│   ├── .gitignore                       # Git ignore rules
│   └── setup-check.js                   # Setup verification script
│
├── 📦 Legacy Files (Deprecated)
│   ├── index.js                         # Old entry point (kept for compatibility)
│   ├── db.js                            # Old database file
│   ├── routes/                          # Old routes
│   │   ├── products.routes.js
│   │   ├── cart.routes.js
│   │   └── auth.routes.js
│   ├── middleware/                      # Old middleware
│   │   └── auth.middleware.js
│   └── data/                            # Old data files
│       ├── products.js
│       └── cart.js
│
└── 📂 Other Directories (Auto-generated)
    └── node_modules/                    # Dependencies
```

## 🎯 Architecture Flow

```
HTTP Request
    ↓
🛣️ Routes (Define endpoints)
    ↓
🛡️ Middleware (Auth, Error handling)
    ↓
🎮 Controllers (Handle requests)
    ↓
✅ Validators (Validate input)
    ↓
🔄 Services (Business logic)
    ↓
🔧 Database (PostgreSQL)
    ↓
🛠️ Utils (Format response)
    ↓
HTTP Response
```

## 📊 Component Responsibilities

### Routes
- Define API endpoints
- HTTP method mapping
- URL patterns

### Controllers
- Handle HTTP requests
- Validate input using validators
- Call services for business logic
- Format and send responses

### Services
- Implement business logic
- Execute database queries
- Handle data transformations
- Manage complex operations

### Middleware
- Authentication (JWT)
- Error handling
- CORS
- Request logging

### Validators
- Validate email format
- Check password strength
- Validate product IDs
- Check quantities

### Utils
- Format consistent responses
- Provide logging
- Helper functions

### Constants
- HTTP status codes
- Error messages
- Success messages

## 🗂️ File Naming Conventions

```
controllers/     → <feature>.controller.js
services/        → <feature>.service.js
routes/          → <feature>.routes.js
validators/      → <feature>.validator.js
middleware/      → <functionality>.js
```

## 🔄 Request Lifecycle Example

### Add to Cart Request

```
1. POST /api/cart
   ↓
2. cartRoutes.js (routes) → router.post("/", CartController.addToCart)
   ↓
3. cartMiddleware (middleware) → validate request
   ↓
4. CartController.addToCart (controller)
   ├─ Validate input using validateCartItem()
   ├─ Get user ID from req.user
   ├─ Call CartService.addToCart()
   └─ Format and return response
   ↓
5. CartService.addToCart (service)
   ├─ Check if item exists in cart
   ├─ Update or insert into database
   ├─ Fetch updated cart items
   └─ Return cart data
   ↓
6. APIResponse.created() (utils)
   └─ Format response as JSON
   ↓
7. Client receives response
```

## 📦 Dependency Graph

```
server.js
  ├── app.js
  │   ├── routes/**
  │   │   └── controllers/**
  │   │       ├── services/**
  │   │       │   └── database.js
  │   │       └── validators/**
  │   ├── middleware/**
  │   │   ├── auth.js
  │   │   └── errorHandler.js
  │   ├── utils/**
  │   └── constants/**
  └── environment.js
```

## 🚀 Getting Started with Each Component

### Adding a New Feature: Orders

1. **Create Models** (Service)
   ```
   src/services/order.service.js
   ```

2. **Create Routes**
   ```
   src/routes/order.routes.js
   ```

3. **Create Controller**
   ```
   src/controllers/order.controller.js
   ```

4. **Create Validator** (if needed)
   ```
   src/validators/order.validator.js
   ```

5. **Register Route in app.js**
   ```javascript
   app.use("/api/orders", orderRoutes);
   ```

6. **Add Database Tables** (PostgreSQL)

## 📝 Best Practices

✅ **Services** should handle all database logic
✅ **Controllers** should be thin wrappers
✅ **Middleware** should be reusable
✅ **Validators** should be centralized
✅ **Utils** should be generic helpers
✅ **Routes** should only define mappings

❌ Don't put database queries in controllers
❌ Don't use hardcoded values
❌ Don't mix concerns in middleware
❌ Don't repeat validation logic

## 🔗 Import Paths

```javascript
// Config
const { JWT_SECRET } = require("../config/environment");
const pool = require("../config/database");

// Utils
const APIResponse = require("../utils/response");
const logger = require("../utils/logger");

// Constants
const { HTTP_STATUS } = require("../constants/http");

// Services
const UserService = require("../services/user.service");

// Validators
const { validateEmail } = require("../validators/auth.validator");

// Middleware
const authMiddleware = require("../middleware/auth");
```

---

**This structure is scalable and follows industry best practices! 🎉**
