-- 1. Create roles table
CREATE TABLE IF NOT EXISTS roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Insert default roles
INSERT INTO roles (name, description) VALUES
  ('admin', 'Administrator with full access'),
  ('user', 'Regular user')
ON CONFLICT (name) DO NOTHING;

-- 3. Add role_id to users table
ALTER TABLE users ADD COLUMN role_id INTEGER DEFAULT 2;

-- 4. Add foreign key constraint
ALTER TABLE users 
ADD CONSTRAINT fk_users_role 
FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET DEFAULT;

-- 5. Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_role_id ON users(role_id);

-- 6. Make first user admin (optional - adjust email as needed)
UPDATE users SET role_id = 1 WHERE email = 'admin@example.com' LIMIT 1;
