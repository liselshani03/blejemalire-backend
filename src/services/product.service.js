const pool = require("../config/database");
const logger = require("../utils/logger");

class ProductService {
  static async getAllProducts(filters = {}) {
    try {
      let query = "SELECT * FROM products WHERE 1=1";
      const params = [];

      // Category filter
      if (filters.category) {
        query += " AND category = $" + (params.length + 1);
        params.push(filters.category);
      }

      // Price range filter
      if (filters.minPrice) {
        query += " AND price >= $" + (params.length + 1);
        params.push(filters.minPrice);
      }

      if (filters.maxPrice) {
        query += " AND price <= $" + (params.length + 1);
        params.push(filters.maxPrice);
      }

      // Search filter
      if (filters.search) {
        query += " AND (name ILIKE $" + (params.length + 1) + " OR description ILIKE $" + (params.length + 2) + ")";
        params.push(`%${filters.search}%`, `%${filters.search}%`);
      }

      query += " ORDER BY name ASC";

      const result = await pool.query(query, params);
      return result.rows;
    } catch (err) {
      logger.error("Error fetching products", err);
      throw err;
    }
  }

  static async getProductById(productId) {
    try {
      const result = await pool.query("SELECT * FROM products WHERE id = $1", [productId]);
      return result.rows[0] || null;
    } catch (err) {
      logger.error("Error fetching product", err);
      throw err;
    }
  }

  static async getProductsByStore(storeId) {
    try {
      const result = await pool.query(
        `SELECT p.*, sp.price as store_price, sp.store_id 
         FROM products p
         JOIN store_products sp ON p.id = sp.product_id
         WHERE sp.store_id = $1
         ORDER BY p.name ASC`,
        [storeId]
      );
      return result.rows;
    } catch (err) {
      logger.error("Error fetching products by store", err);
      throw err;
    }
  }

  static async searchProducts(searchTerm) {
    try {
      const result = await pool.query(
        `SELECT * FROM products 
         WHERE name ILIKE $1 OR description ILIKE $1
         ORDER BY name ASC`,
        [`%${searchTerm}%`]
      );
      return result.rows;
    } catch (err) {
      logger.error("Error searching products", err);
      throw err;
    }
  }
}

module.exports = ProductService;
