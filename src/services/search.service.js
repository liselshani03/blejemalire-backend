const pool = require("../config/database");
const logger = require("../utils/logger");

class SearchService {
  /**
   * Advanced search with filters and sorting
   * @param {Object} filters - Search filters
   * @param {string} filters.search - Text search in name/description
   * @param {string} filters.category - Filter by category
   * @param {number} filters.minPrice - Minimum price
   * @param {number} filters.maxPrice - Maximum price
   * @param {boolean} filters.onSale - Filter products with discount
   * @param {string} filters.sortBy - Sort field (price, name, date, discount)
   * @param {string} filters.order - Sort order (asc, desc)
   * @param {number} filters.limit - Results limit (default: 50)
   * @param {number} filters.offset - Results offset for pagination
   * @param {string} filters.startDate - Filter by creation date (from)
   * @param {string} filters.endDate - Filter by creation date (to)
   */
  static async searchProducts(filters = {}) {
    try {
      const {
        search = "",
        category = "",
        minPrice = 0,
        maxPrice = Infinity,
        onSale = false,
        sortBy = "created_at",
        order = "DESC",
        limit = 50,
        offset = 0,
        startDate = null,
        endDate = null,
      } = filters;

      // Validate order parameter
      const validOrder = ["ASC", "DESC"].includes(order.toUpperCase())
        ? order.toUpperCase()
        : "DESC";

      // Validate sortBy parameter
      const validSortBy = this.validateSortField(sortBy);

      // Build WHERE clause
      let whereConditions = [];
      let queryParams = [];
      let paramCount = 1;

      // Text search in name and description
      if (search.trim()) {
        whereConditions.push(
          `(name ILIKE $${paramCount} OR description ILIKE $${paramCount})`
        );
        queryParams.push(`%${search}%`);
        paramCount++;
      }

      // Category filter
      if (category.trim()) {
        whereConditions.push(`category = $${paramCount}`);
        queryParams.push(category);
        paramCount++;
      }

      // Price range filter
      if (minPrice > 0 || maxPrice !== Infinity) {
        if (minPrice > 0) {
          whereConditions.push(`price >= $${paramCount}`);
          queryParams.push(minPrice);
          paramCount++;
        }
        if (maxPrice !== Infinity) {
          whereConditions.push(`price <= $${paramCount}`);
          queryParams.push(maxPrice);
          paramCount++;
        }
      }

      // On sale filter (products with discount)
      if (onSale === true || onSale === "true") {
        whereConditions.push(`old_price > price`);
      }

      // Date range filter
      if (startDate) {
        whereConditions.push(`created_at >= $${paramCount}`);
        queryParams.push(new Date(startDate));
        paramCount++;
      }
      if (endDate) {
        whereConditions.push(`created_at <= $${paramCount}`);
        queryParams.push(new Date(endDate));
        paramCount++;
      }

      // Build final query
      let query = "SELECT * FROM products";

      if (whereConditions.length > 0) {
        query += " WHERE " + whereConditions.join(" AND ");
      }

      // Add sorting
      query += ` ORDER BY ${validSortBy} ${validOrder}`;

      // Add pagination
      query += ` LIMIT $${paramCount} OFFSET $${paramCount + 1}`;
      queryParams.push(limit, offset);

      // Execute query
      const result = await pool.query(query, queryParams);

      logger.info(`Search executed with ${result.rows.length} results`);

      return result.rows;
    } catch (error) {
      logger.error("Error searching products:", error);
      throw error;
    }
  }

  /**
   * Get total count of products matching filters (for pagination)
   */
  static async getProductCount(filters = {}) {
    try {
      const {
        search = "",
        category = "",
        minPrice = 0,
        maxPrice = Infinity,
        onSale = false,
        startDate = null,
        endDate = null,
      } = filters;

      let whereConditions = [];
      let queryParams = [];
      let paramCount = 1;

      if (search.trim()) {
        whereConditions.push(
          `(name ILIKE $${paramCount} OR description ILIKE $${paramCount})`
        );
        queryParams.push(`%${search}%`);
        paramCount++;
      }

      if (category.trim()) {
        whereConditions.push(`category = $${paramCount}`);
        queryParams.push(category);
        paramCount++;
      }

      if (minPrice > 0 || maxPrice !== Infinity) {
        if (minPrice > 0) {
          whereConditions.push(`price >= $${paramCount}`);
          queryParams.push(minPrice);
          paramCount++;
        }
        if (maxPrice !== Infinity) {
          whereConditions.push(`price <= $${paramCount}`);
          queryParams.push(maxPrice);
          paramCount++;
        }
      }

      if (onSale === true || onSale === "true") {
        whereConditions.push(`old_price > price`);
      }

      if (startDate) {
        whereConditions.push(`created_at >= $${paramCount}`);
        queryParams.push(new Date(startDate));
        paramCount++;
      }

      if (endDate) {
        whereConditions.push(`created_at <= $${paramCount}`);
        queryParams.push(new Date(endDate));
        paramCount++;
      }

      let query = "SELECT COUNT(*) as total FROM products";

      if (whereConditions.length > 0) {
        query += " WHERE " + whereConditions.join(" AND ");
      }

      const result = await pool.query(query, queryParams);
      return parseInt(result.rows[0].total, 10);
    } catch (error) {
      logger.error("Error counting products:", error);
      throw error;
    }
  }

  /**
   * Get available categories
   */
  static async getCategories() {
    try {
      const result = await pool.query(
        "SELECT DISTINCT category FROM products ORDER BY category"
      );
      return result.rows.map((row) => row.category);
    } catch (error) {
      logger.error("Error fetching categories:", error);
      throw error;
    }
  }

  /**
   * Get price statistics for filters
   */
  static async getPriceStats() {
    try {
      const result = await pool.query(
        "SELECT MIN(price) as min_price, MAX(price) as max_price, AVG(price) as avg_price FROM products"
      );
      return result.rows[0];
    } catch (error) {
      logger.error("Error fetching price stats:", error);
      throw error;
    }
  }

  /**
   * Validate sort field to prevent SQL injection
   */
  static validateSortField(field) {
    const validFields = {
      price: "price",
      name: "name",
      date: "created_at",
      created_at: "created_at",
      discount: "CAST((old_price - price) AS FLOAT)",
      old_price: "old_price",
      category: "category",
    };

    return validFields[field] || "created_at";
  }
}

module.exports = SearchService;
