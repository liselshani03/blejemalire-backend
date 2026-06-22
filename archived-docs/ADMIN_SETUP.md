# 👨‍💼 Admin Roles & Product Management Setup

## Overview

Added complete admin role system with product management:
- **Roles Table**: Track user roles (admin, user)
- **Admin Middleware**: Protect admin routes
- **Product CRUD**: Create, update, delete products via API
- **Admin Dashboard Ready**: Frontend can build UI with these endpoints

---

## Database Setup

### Run Migration

```sql
-- PostgreSQL - Run this in pgAdmin or CLI:

CREATE TABLE IF NOT EXISTS roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO roles (name, description) VALUES
  ('admin', 'Administrator with full access'),
  ('user', 'Regular user')
ON CONFLICT (name) DO NOTHING;

ALTER TABLE users ADD COLUMN role_id INTEGER DEFAULT 2;

ALTER TABLE users 
ADD CONSTRAINT fk_users_role 
FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET DEFAULT;

CREATE INDEX IF NOT EXISTS idx_users_role_id ON users(role_id);

-- Make your test user admin (change email):
UPDATE users SET role_id = 1 WHERE email = 'your_email@example.com' LIMIT 1;
```

### Verify

```sql
-- Check roles table
SELECT * FROM roles;

-- Check user roles
SELECT u.email, r.name as role FROM users u 
LEFT JOIN roles r ON u.role_id = r.id;
```

---

## Backend API Endpoints

### Create Product (Admin Only)

```http
POST /api/admin/products
Authorization: Bearer <accessToken>
Content-Type: application/json

{
  "name": "Product Name",
  "description": "Product description",
  "price": 29.99,
  "old_price": 49.99,
  "image": "https://example.com/image.jpg",
  "category": "electronics"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "id": 1,
    "name": "Product Name",
    "description": "Product description",
    "price": 29.99,
    "old_price": 49.99,
    "image": "https://example.com/image.jpg",
    "category": "electronics",
    "created_at": "2026-06-20T13:30:00Z"
  }
}
```

---

### Update Product (Admin Only)

```http
PUT /api/admin/products/:id
Authorization: Bearer <accessToken>
Content-Type: application/json

{
  "price": 34.99,
  "old_price": 54.99
}
```

**Note**: Only include fields you want to update. Others keep existing values.

---

### Delete Product (Admin Only)

```http
DELETE /api/admin/products/:id
Authorization: Bearer <accessToken>
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Product deleted successfully",
  "data": { "id": 1 }
}
```

---

### Get Product Statistics (Admin Only)

```http
GET /api/admin/products/stats
Authorization: Bearer <accessToken>
```

**Response:**
```json
{
  "success": true,
  "message": "Product statistics retrieved",
  "data": {
    "total_products": 50,
    "avg_price": 35.50,
    "max_price": 199.99,
    "min_price": 5.99,
    "total_categories": 8
  }
}
```

---

## Error Responses

### 401 Unauthorized (No Token)
```json
{
  "success": false,
  "message": "Unauthorized access",
  "timestamp": "2026-06-20T13:30:00Z"
}
```

### 403 Forbidden (Not Admin)
```json
{
  "success": false,
  "message": "Admin access required",
  "timestamp": "2026-06-20T13:30:00Z"
}
```

### 400 Bad Request (Validation Error)
```json
{
  "success": false,
  "message": "Name, price, and category are required",
  "timestamp": "2026-06-20T13:30:00Z"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Product not found",
  "timestamp": "2026-06-20T13:30:00Z"
}
```

---

## Testing with cURL

### Create Product
```bash
curl -X POST http://localhost:5000/api/admin/products \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "description": "Gaming laptop",
    "price": 1299.99,
    "old_price": 1599.99,
    "image": "https://example.com/laptop.jpg",
    "category": "electronics"
  }'
```

### Update Product
```bash
curl -X PUT http://localhost:5000/api/admin/products/1 \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"price": 1199.99}'
```

### Delete Product
```bash
curl -X DELETE http://localhost:5000/api/admin/products/1 \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### Get Stats
```bash
curl -X GET http://localhost:5000/api/admin/products/stats \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## Frontend Implementation

### Check if User is Admin

```javascript
// After login, fetch user with role
const getUserRole = async () => {
  const response = await fetch("http://localhost:5000/api/admin/products/stats", {
    headers: AuthService.getHeaders()
  });
  
  if (response.status === 403) {
    // Not admin
    console.log("User is not admin");
    return false;
  }
  
  if (response.ok) {
    // Is admin
    console.log("User is admin!");
    return true;
  }
};
```

### Show Admin Button

```javascript
// In your app/component
const [isAdmin, setIsAdmin] = useState(false);

useEffect(() => {
  if (AuthService.isLoggedIn()) {
    checkIfAdmin();
  }
}, []);

const checkIfAdmin = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/admin/products/stats", {
      headers: AuthService.getHeaders()
    });
    setIsAdmin(response.ok);
  } catch {
    setIsAdmin(false);
  }
};

// In JSX:
{isAdmin && (
  <button onClick={() => navigate("/admin/products")}>
    ➕ Add Product
  </button>
)}
```

### Add Product Form

```javascript
const handleAddProduct = async (formData) => {
  try {
    const response = await fetch("http://localhost:5000/api/admin/products", {
      method: "POST",
      headers: AuthService.getHeaders(),
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    console.log("✅ Product added:", data.data);
    navigate("/products");
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
};
```

---

## Security Notes

✅ **Authenticated**: All admin routes require valid access token  
✅ **Authorized**: Only users with admin role can access  
✅ **Role-Based**: System checks role in database on each request  
✅ **Immutable**: Regular users cannot grant themselves admin role (role_id fixed)

---

## Architecture

```
Routes: POST /api/admin/products (protected)
  ↓
authMiddleware (checks JWT)
  ↓
adminMiddleware (checks role in DB)
  ↓
AdminProductController (handles request)
  ↓
AdminProductService (database operations)
  ↓
PostgreSQL (stores data)
```

---

## Next Steps

1. ✅ Run PostgreSQL migration
2. ✅ Restart backend
3. ✅ Update user role to admin (in PostgreSQL)
4. 📲 Frontend: Build admin dashboard with these endpoints
5. 🚀 Then: MongoDB + Reports integration

---

## Troubleshooting

### "Admin access required"
- User is authenticated but not admin
- Solution: Update user role_id = 1 in database

### "Unauthorized access"
- Missing or invalid access token
- Solution: Make sure frontend is sending Bearer token

### "Product not found"
- Trying to update/delete non-existent product
- Solution: Check product ID exists

### 500 Internal Server Error
- Database connection issue
- Solution: Verify roles table exists and has data

