# API Testing Examples

This file contains example requests for testing the Blejemalire API.

## Base URL
```
http://localhost:5000
```

## Authentication Flow

### 1. Sign Up

```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "SecurePassword123"
  }'
```

Response:
```json
{
  "success": true,
  "message": "Sign up successful",
  "data": {
    "user": {
      "id": 1,
      "email": "test@example.com",
      "created_at": "2026-06-19T10:30:00.000Z"
    }
  },
  "timestamp": "2026-06-19T10:30:00.000Z"
}
```

### 2. Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "SecurePassword123"
  }'
```

Response:
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "email": "test@example.com"
    }
  },
  "timestamp": "2026-06-19T10:30:00.000Z"
}
```

**Save the token for authenticated requests**

## Product Endpoints

### Get All Products

```bash
curl http://localhost:5000/api/products
```

### Get Products with Filters

```bash
# Filter by category
curl "http://localhost:5000/api/products?category=drink"

# Filter by price range
curl "http://localhost:5000/api/products?minPrice=0.50&maxPrice=2.00"

# Filter by category and price
curl "http://localhost:5000/api/products?category=drink&minPrice=0.50&maxPrice=1.00"

# Search by name
curl "http://localhost:5000/api/products?search=coca"
```

### Search Products

```bash
curl "http://localhost:5000/api/products/search?q=redbull"
```

### Get Single Product

```bash
curl http://localhost:5000/api/products/1
```

### Get Products by Store

```bash
curl http://localhost:5000/api/products/store/1
```

## Cart Endpoints

### Get Cart Items

```bash
curl http://localhost:5000/api/cart
```

### Add Item to Cart

```bash
curl -X POST http://localhost:5000/api/cart \
  -H "Content-Type: application/json" \
  -d '{
    "productId": 1,
    "quantity": 2
  }'
```

### Update Item Quantity

```bash
curl -X PUT http://localhost:5000/api/cart/1 \
  -H "Content-Type: application/json" \
  -d '{
    "quantity": 5
  }'
```

### Remove Item from Cart

```bash
curl -X DELETE http://localhost:5000/api/cart/1
```

### Clear Entire Cart

```bash
curl -X DELETE http://localhost:5000/api/cart
```

## Error Examples

### Missing Required Field

```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com"
  }'
```

Response:
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "password": "Password must be at least 8 characters"
  },
  "timestamp": "2026-06-19T10:30:00.000Z"
}
```

### Invalid Email

```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "invalid-email",
    "password": "ValidPassword123"
  }'
```

Response:
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": "Invalid email format"
  },
  "timestamp": "2026-06-19T10:30:00.000Z"
}
```

### User Already Exists

```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "existing@example.com",
    "password": "ValidPassword123"
  }'
```

Response:
```json
{
  "success": false,
  "message": "User with this email already exists",
  "timestamp": "2026-06-19T10:30:00.000Z"
}
```

### Invalid Product ID

```bash
curl -X POST http://localhost:5000/api/cart \
  -H "Content-Type: application/json" \
  -d '{
    "productId": -1,
    "quantity": 1
  }'
```

Response:
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "productId": "Invalid product ID"
  },
  "timestamp": "2026-06-19T10:30:00.000Z"
}
```

## Using Postman/Insomnia

1. Import these requests into your API testing tool
2. Set the base URL: `http://localhost:5000`
3. Use the responses above as reference

### Environment Variables
```
baseUrl = http://localhost:5000
token = <received_from_login>
```

### Authenticated Request Example
```
GET {{baseUrl}}/api/cart
Authorization: Bearer {{token}}
```

---

**Test all endpoints before deploying to production!**
