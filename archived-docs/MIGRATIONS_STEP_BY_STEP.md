# 🗄️ PostgreSQL Migrations - Complete Setup

Run these migrations in order in PostgreSQL (pgAdmin or CLI).

---

## 1️⃣ Migration 1: Add Refresh Tokens Table

```sql
-- Create refresh_tokens table to store user refresh tokens
CREATE TABLE IF NOT EXISTS refresh_tokens (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_user_id ON refresh_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_token ON refresh_tokens(token);
```

**✅ Verify it worked:**
```sql
\d refresh_tokens
```

---

## 2️⃣ Migration 2: Add Roles System

```sql
-- Create roles table
CREATE TABLE IF NOT EXISTS roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default roles
INSERT INTO roles (name, description) VALUES
  ('admin', 'Administrator with full access'),
  ('user', 'Regular user')
ON CONFLICT (name) DO NOTHING;

-- Add role_id to users table
ALTER TABLE users ADD COLUMN role_id INTEGER DEFAULT 2;

-- Add foreign key constraint
ALTER TABLE users 
ADD CONSTRAINT fk_users_role 
FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET DEFAULT;

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_role_id ON users(role_id);
```

**✅ Verify it worked:**
```sql
SELECT * FROM roles;
SELECT u.email, r.name as role FROM users u LEFT JOIN roles r ON u.role_id = r.id;
```

---

## 3️⃣ Migration 3: Make Your User Admin (REQUIRED!)

```sql
-- Replace 'your_email@example.com' with your actual email
UPDATE users SET role_id = 1 WHERE email = 'your_email@example.com' LIMIT 1;
```

**✅ Verify it worked:**
```sql
SELECT email, role_id FROM users WHERE role_id = 1;
```

---

## 📋 All Migrations at Once (Optional)

If you want to run all three together:

```sql
-- Migration 1: Refresh Tokens
CREATE TABLE IF NOT EXISTS refresh_tokens (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_refresh_tokens_user_id ON refresh_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_token ON refresh_tokens(token);

-- Migration 2: Roles System
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

-- Migration 3: Make Your User Admin
UPDATE users SET role_id = 1 WHERE email = 'your_email@example.com' LIMIT 1;
```

---

## ⚠️ Important Notes

1. **Change the email in Migration 3!** 
   - Replace `your_email@example.com` with YOUR actual email
   - Otherwise you won't be able to access admin endpoints

2. **Run in order** if doing separately (Migration 1 → 2 → 3)

3. **Don't skip** any migration - each builds on the previous

4. **After running**, restart your backend:
   ```bash
   npm run dev
   ```

---

## 🧪 Test It Works

After all migrations and backend restart:

```bash
# 1. Login and get accessToken
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "your_email@example.com", "password": "your_password"}'

# Copy the accessToken from response

# 2. Test admin endpoint
curl -X GET http://localhost:5000/api/admin/products/stats \
  -H "Authorization: Bearer <YOUR_ACCESS_TOKEN>"

# Should return product stats, not "Admin access required"
```

---

Done! Ready for MongoDB next? 🚀
