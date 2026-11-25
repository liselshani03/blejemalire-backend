# 🛍️ Blejemalire Backend - Price Comparison Platform

Blejemalire is a professional-grade backend API for a price comparison platform where users can find which products are cheaper and where.

## 🏗️ Project Structure

```
src/
├── config/              # Configuration files
│   ├── database.js      # Database connection
│   └── environment.js   # Environment variables
├── controllers/         # Request handlers
│   ├── auth.controller.js
│   ├── product.controller.js
│   └── cart.controller.js
├── services/            # Business logic & data access
│   ├── auth.service.js
│   ├── product.service.js
│   └── cart.service.js
├── middleware/          # Express middleware
│   ├── auth.js          # JWT authentication
│   └── errorHandler.js  # Error handling
├── routes/              # API routes
│   ├── auth.routes.js
│   ├── product.routes.js
│   └── cart.routes.js
├── validators/          # Input validation
│   ├── auth.validator.js
│   └── cart.validator.js
├── utils/               # Utility functions
│   ├── response.js      # Response formatting
│   └── logger.js        # Logging
├── constants/           # Application constants
│   └── http.js          # HTTP status codes & messages
├── app.js               # Express app configuration
└── server.js            # Server entry point
```

## 📋 Features

- ✅ **User Authentication** - Sign up and login with JWT
- ✅ **Product Management** - Browse and search products
- ✅ **Price Comparison** - Find products across different stores
- ✅ **Shopping Cart** - Add, update, and remove items
- ✅ **Professional Architecture** - Controllers, Services, Middleware
- ✅ **Error Handling** - Comprehensive error handling
- ✅ **Input Validation** - Request validation
- ✅ **Logging** - Request and error logging
- ✅ **Environment Configuration** - Environment-based config

## 📊 Project Management

- **Jira Board:** [BlejeMaLire](https://blejemalire.atlassian.net/jira/core/projects/BLEJE/list?filter=allissues&jql=project%20%3D%20%22BLEJE%22%20ORDER%20BY%20created%20DESC)
- **Project Key:** BLEJE
- **Status:** Active Development - Lab Course 2

### Completed Features ✅
- Authentication & Authorization System
- Product Management (CRUD)
- Report Generation System
- Data Export/Import (CSV, JSON)
- Advanced Search with Filters & Sorting
- Activity Logging System

### Current Work 🔄
- Cart Export (Excel, CSV, PDF)

## 🚀 Getting Started

### Prerequisites
- Node.js v14+
- PostgreSQL v12+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blejemalire-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your database credentials

4. **Setup PostgreSQL Database**
   Create the required tables:
   ```sql
   -- Users table
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     email VARCHAR(255) UNIQUE NOT NULL,
     password VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
   );

   -- Products table
   CREATE TABLE products (
     id SERIAL PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     description TEXT,
     price DECIMAL(10, 2) NOT NULL,
     old_price DECIMAL(10, 2),
     image VARCHAR(255),
     category VARCHAR(100),
     created_at TIMESTAMP DEFAULT NOW()
   );

   -- Cart items table
   CREATE TABLE cart_items (
     id SERIAL PRIMARY KEY,
     product_id INTEGER NOT NULL,
     user_id INTEGER,
     quantity INTEGER DEFAULT 1,
     created_at TIMESTAMP DEFAULT NOW(),
     FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
   );

   -- Stores table
   CREATE TABLE stores (
     id SERIAL PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     location VARCHAR(255),
     created_at TIMESTAMP DEFAULT NOW()
   );

   -- Store products table (for price comparison)
   CREATE TABLE store_products (
     id SERIAL PRIMARY KEY,
     product_id INTEGER NOT NULL,
     store_id INTEGER NOT NULL,
     price DECIMAL(10, 2) NOT NULL,
     created_at TIMESTAMP DEFAULT NOW(),
     FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
     FOREIGN KEY (store_id) REFERENCES stores(id) ON DELETE CASCADE
   );
   ```

5. **Start the server**
   ```bash
   # Production
   npm start

   # Development (with auto-reload)
   npm run dev
   ```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - Create a new account
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products
- `GET /api/products?category=drink&minPrice=1&maxPrice=10` - Get products with filters
- `GET /api/products/search?q=coca` - Search products
- `GET /api/products/:id` - Get single product
- `GET /api/products/store/:storeId` - Get products by store

### Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:productId` - Update item quantity
- `DELETE /api/cart/:productId` - Remove item from cart
- `DELETE /api/cart` - Clear entire cart

## 🔐 Authentication

The API uses JWT (JSON Web Token) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_token_here>
```

## 📝 Example Requests

### Sign Up
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

### Get All Products
```bash
curl http://localhost:5000/api/products
```

### Add to Cart
```bash
curl -X POST http://localhost:5000/api/cart \
  -H "Content-Type: application/json" \
  -d '{"productId":1,"quantity":2}'
```

## 🛠️ Development

### Available Scripts
- `npm start` - Run production server
- `npm run dev` - Run development server with auto-reload
- `npm test` - Run tests (to be implemented)

### Code Structure

**Controllers** handle HTTP requests and responses
**Services** contain business logic and database queries
**Validators** validate user input
**Middleware** handles authentication and error handling
**Utils** provide helper functions

## 📦 Dependencies

- **express** - Web framework
- **pg** - PostgreSQL client
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT authentication
- **cors** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables

## 🔒 Security Considerations

1. Change `JWT_SECRET` in production
2. Use strong passwords for database
3. Implement rate limiting
4. Use HTTPS in production
5. Validate and sanitize all user inputs
6. Implement CSRF protection

## 🐛 Troubleshooting

### Database Connection Error
- Verify PostgreSQL is running
- Check database credentials in `.env`
- Ensure tables are created

### Port Already in Use
- Change `PORT` in `.env`
- Or kill the process using port 5000

## 📈 Future Enhancements

- [ ] Add unit and integration tests
- [ ] Implement rate limiting
- [ ] Add order management
- [ ] Implement user profiles
- [ ] Add price history tracking
- [ ] Implement notification system
- [ ] Add analytics dashboard

## 📄 License

ISC

## 👥 Support

For issues and questions, please create an issue in the repository.

---

**Made with ❤️ for Blejemalire**
