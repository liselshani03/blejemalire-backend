# 🚀 Blejemalire Backend - Quick Start Guide

## Prerequisites
- ✅ Node.js v14+ installed
- ✅ PostgreSQL installed and running
- ✅ Git

## Step 1: Install Dependencies

```bash
npm install
```

This installs:
- `express` - Web framework
- `pg` - PostgreSQL client
- `bcrypt` - Password hashing
- `jsonwebtoken` - JWT tokens
- `cors` - Cross-Origin Resource Sharing
- `dotenv` - Environment variables
- `nodemon` - Dev server auto-reload

## Step 2: Setup Database

### Create PostgreSQL Database

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE blejemalire;

# Connect to the database
\c blejemalire
```

### Create Tables

Run this SQL to create the required tables:

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

-- Store products table
CREATE TABLE store_products (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL,
  store_id INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (store_id) REFERENCES stores(id) ON DELETE CASCADE
);

-- Insert sample products
INSERT INTO products (name, description, price, old_price, image, category) VALUES
('Redbull', 'Energy Drink', 0.99, 1.25, '/images/redbull.png', 'drink'),
('Coca-Cola 330ml', 'Cola Drink', 0.40, 0.65, '/images/coca-cola.webp', 'drink'),
('Fanta Orange 330ml', 'Orange Drink', 0.40, 0.65, '/images/fanta.png', 'drink'),
('Sprite 330ml', 'Sprite Drink', 0.40, 0.65, '/images/sprite.png', 'drink');

-- Insert sample stores
INSERT INTO stores (name, location) VALUES
('Store A', 'Downtown'),
('Store B', 'Mall'),
('Store C', 'Airport');

-- Insert sample store products
INSERT INTO store_products (product_id, store_id, price) VALUES
(1, 1, 0.99),
(1, 2, 0.95),
(1, 3, 1.10),
(2, 1, 0.40),
(2, 2, 0.38),
(2, 3, 0.45);
```

## Step 3: Configure Environment

Create `.env` file:

```bash
cp .env.example .env
```

Edit `.env`:

```
PORT=5000
NODE_ENV=development

DB_USER=postgres
DB_HOST=localhost
DB_NAME=blejemalire
DB_PASSWORD=your_password
DB_PORT=5432

JWT_SECRET=your-super-secret-key-change-in-production
JWT_EXPIRE=7d
BCRYPT_ROUNDS=10
```

## Step 4: Start the Server

### Development Mode (with auto-reload)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

You should see:
```
✅ Server running on http://localhost:5000
📝 Environment: development
✅ DATABASE CONNECTED
```

## Step 5: Test the API

### Health Check

```bash
curl http://localhost:5000
```

Response:
```json
{
  "success": true,
  "message": "🚀 Blejemalire API is running",
  "version": "1.0.0",
  "timestamp": "2026-06-19T10:30:00.000Z"
}
```

### Sign Up

```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

### Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

Save the `token` from the response.

### Get All Products

```bash
curl http://localhost:5000/api/products
```

### Search Products

```bash
curl "http://localhost:5000/api/products/search?q=coca"
```

### Add to Cart

```bash
curl -X POST http://localhost:5000/api/cart \
  -H "Content-Type: application/json" \
  -d '{
    "productId": 1,
    "quantity": 2
  }'
```

### Get Cart

```bash
curl http://localhost:5000/api/cart
```

## 📁 Project Structure

```
src/
├── config/              # Configuration files
├── controllers/         # Request handlers
├── services/            # Business logic
├── middleware/          # Express middleware
├── routes/              # API routes
├── validators/          # Input validation
├── utils/               # Utilities
├── constants/           # Constants
├── app.js               # Express app
└── server.js            # Entry point
```

## 🔧 Available Scripts

```bash
npm start              # Run production server
npm run dev            # Run dev server with auto-reload
npm test               # Run tests (not yet implemented)
```

## 📖 Documentation

- **README.md** - Complete API documentation
- **MIGRATION.md** - Migration guide from old structure
- **REFACTOR_SUMMARY.md** - Summary of refactoring

## 🆘 Troubleshooting

### Database Connection Error

```
❌ DATABASE CONNECTION FAILED: connect ECONNREFUSED
```

**Solution:**
- Ensure PostgreSQL is running: `psql -U postgres`
- Check `.env` database credentials
- Verify database name exists

### Port Already in Use

```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution:**
- Change `PORT` in `.env`
- Or kill the process: `lsof -ti:5000 | xargs kill -9` (macOS/Linux)

### Module Not Found

```
Error: Cannot find module
```

**Solution:**
```bash
npm install
```

## 🎉 You're Ready!

The API is now ready to use. For detailed endpoint documentation, see [README.md](./README.md)

---

**Happy coding! 🚀**
