const pool = require("../config/database");
const logger = require("../utils/logger");

class AdminProductService {
  static async createProduct(productData) {
    try {
      const { name, description, price, old_price, image, category, discount_ends_at, store } = productData;

      const result = await pool.query(
        `INSERT INTO products (name, description, price, old_price, image, category, discount_ends_at, store) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
         RETURNING *`,
        [name, description, price, old_price, image, category, discount_ends_at, store]
      );

      logger.info(`Product created: ${name}`);
      return result.rows[0];
    } catch (err) {
      logger.error("Error creating product", err);
      throw err;
    }
  }

  static async updateProduct(productId, productData) {
    try {
      const { name, description, price, old_price, image, category, discount_ends_at, store } = productData;

      // Check if product exists
      const existingProduct = await pool.query(
        "SELECT * FROM products WHERE id = $1",
        [productId]
      );

      if (existingProduct.rows.length === 0) {
        throw new Error("Product not found");
      }

      // Use existing values if not provided
      const updatedName = name || existingProduct.rows[0].name;
      const updatedDescription = description || existingProduct.rows[0].description;
      const updatedPrice = price !== undefined ? price : existingProduct.rows[0].price;
      const updatedOldPrice = old_price !== undefined ? old_price : existingProduct.rows[0].old_price;
      const updatedImage = image || existingProduct.rows[0].image;
      const updatedCategory = category || existingProduct.rows[0].category;
      const updatedDiscountEndsAt = discount_ends_at !== undefined ? discount_ends_at : existingProduct.rows[0].discount_ends_at;
      const updatedStore = store !== undefined ? store : existingProduct.rows[0].store;

      const result = await pool.query(
        `UPDATE products 
         SET name = $1, description = $2, price = $3, old_price = $4, image = $5, category = $6, discount_ends_at = $7, store = $8
         WHERE id = $9 
         RETURNING *`,
        [updatedName, updatedDescription, updatedPrice, updatedOldPrice, updatedImage, updatedCategory, updatedDiscountEndsAt, updatedStore, productId]
      );

      logger.info(`Product updated: ${productId}`);
      return result.rows[0];
    } catch (err) {
      logger.error("Error updating product", err);
      throw err;
    }
  }

  static async deleteProduct(productId) {
    try {
      // Check if product exists
      const result = await pool.query(
        "SELECT * FROM products WHERE id = $1",
        [productId]
      );

      if (result.rows.length === 0) {
        throw new Error("Product not found");
      }

      await pool.query("DELETE FROM products WHERE id = $1", [productId]);
      logger.info(`Product deleted: ${productId}`);
      return { id: productId };
    } catch (err) {
      logger.error("Error deleting product", err);
      throw err;
    }
  }

  static async getProducts() {
    try {
      const result = await pool.query(
        "SELECT * FROM products ORDER BY created_at DESC"
      );
      return result.rows;
    } catch (err) {
      logger.error("Error fetching products", err);
      throw err;
    }
  }

  static async getProductStats() {
    try {
      const result = await pool.query(
        `SELECT 
          COUNT(*) as total_products,
          AVG(price) as avg_price,
          MAX(price) as max_price,
          MIN(price) as min_price,
          COUNT(DISTINCT category) as total_categories
         FROM products`
      );

      return result.rows[0];
    } catch (err) {
      logger.error("Error getting product stats", err);
      throw err;
    }
  }
}

module.exports = AdminProductService;
