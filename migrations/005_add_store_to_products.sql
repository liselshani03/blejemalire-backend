-- Add store column to products table
ALTER TABLE products ADD COLUMN IF NOT EXISTS store VARCHAR(255);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_products_store ON products(store);
