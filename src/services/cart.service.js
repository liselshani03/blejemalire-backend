const pool = require("../config/database");
const logger = require("../utils/logger");

class CartService {
  static async getCartItems(userId = null) {
    try {
      let query = `
        SELECT 
          cart_items.id AS cart_id,
          cart_items.product_id,
          cart_items.quantity,
          products.name,
          products.price,
          products.old_price,
          products.image,
          products.category
        FROM cart_items
        JOIN products ON cart_items.product_id = products.id
      `;

      if (userId) {
        query += " WHERE cart_items.user_id = $1";
      }

      query += " ORDER BY cart_items.created_at DESC";

      const result = userId ? await pool.query(query, [userId]) : await pool.query(query);
      return result.rows;
    } catch (err) {
      logger.error("Error fetching cart items", err);
      throw err;
    }
  }

  static async addToCart(productId, quantity, userId = null) {
    try {
      // Check if item already exists
      let checkQuery = "SELECT * FROM cart_items WHERE product_id = $1";
      const checkParams = [productId];

      if (userId) {
        checkQuery += " AND user_id = $2";
        checkParams.push(userId);
      }

      const existingItem = await pool.query(checkQuery, checkParams);

      if (existingItem.rows.length > 0) {
        // Update quantity
        let updateQuery = "UPDATE cart_items SET quantity = quantity + $1 WHERE product_id = $2";
        const updateParams = [quantity, productId];

        if (userId) {
          updateQuery += " AND user_id = $3";
          updateParams.push(userId);
        }

        await pool.query(updateQuery, updateParams);
        logger.info(`Cart item updated: Product ${productId}, Quantity +${quantity}`);
      } else {
        // Insert new item
        const insertQuery = userId
          ? "INSERT INTO cart_items (product_id, quantity, user_id) VALUES ($1, $2, $3)"
          : "INSERT INTO cart_items (product_id, quantity) VALUES ($1, $2)";

        const insertParams = userId ? [productId, quantity, userId] : [productId, quantity];
        await pool.query(insertQuery, insertParams);
        logger.info(`Item added to cart: Product ${productId}, Quantity ${quantity}`);
      }

      return await this.getCartItems(userId);
    } catch (err) {
      logger.error("Error adding to cart", err);
      throw err;
    }
  }

  static async removeFromCart(productId, userId = null) {
    try {
      let deleteQuery = "DELETE FROM cart_items WHERE product_id = $1";
      const params = [productId];

      if (userId) {
        deleteQuery += " AND user_id = $2";
        params.push(userId);
      }

      await pool.query(deleteQuery, params);
      logger.info(`Item removed from cart: Product ${productId}`);

      return await this.getCartItems(userId);
    } catch (err) {
      logger.error("Error removing from cart", err);
      throw err;
    }
  }

  static async updateCartItemQuantity(productId, quantity, userId = null) {
    try {
      let updateQuery = "UPDATE cart_items SET quantity = $1 WHERE product_id = $2";
      const params = [quantity, productId];

      if (userId) {
        updateQuery += " AND user_id = $3";
        params.push(userId);
      }

      await pool.query(updateQuery, params);
      logger.info(`Cart item quantity updated: Product ${productId}, New quantity ${quantity}`);

      return await this.getCartItems(userId);
    } catch (err) {
      logger.error("Error updating cart item quantity", err);
      throw err;
    }
  }

  static async clearCart(userId = null) {
    try {
      let deleteQuery = "DELETE FROM cart_items";
      const params = [];

      if (userId) {
        deleteQuery += " WHERE user_id = $1";
        params.push(userId);
      }

      await pool.query(deleteQuery, params);
      logger.info("Cart cleared");

      return [];
    } catch (err) {
      logger.error("Error clearing cart", err);
      throw err;
    }
  }
}

module.exports = CartService;
