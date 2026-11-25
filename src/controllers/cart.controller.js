const CartService = require("../services/cart.service");
const APIResponse = require("../utils/response");
const { ERROR_MESSAGES, SUCCESS_MESSAGES } = require("../constants/http");
const { validateCartItem } = require("../validators/cart.validator");
const logger = require("../utils/logger");

class CartController {
  static async getCart(req, res) {
    try {
      const userId = req.user?.id || null;

      const cartItems = await CartService.getCartItems(userId);

      logger.info(`Cart fetched for user ${userId || "anonymous"}: ${cartItems.length} items`);
      return APIResponse.success(res, cartItems, SUCCESS_MESSAGES.CART_FETCHED);
    } catch (err) {
      logger.error("Error fetching cart", err);
      return APIResponse.serverError(res);
    }
  }

  static async addToCart(req, res) {
    try {
      const { productId, quantity = 1 } = req.body;
      const userId = req.user?.id || null;

      // Validate input
      const validation = validateCartItem(productId, quantity);
      if (!validation.isValid) {
        logger.warn("Add to cart validation failed", validation.errors);
        return APIResponse.badRequest(res, "Validation failed", validation.errors);
      }

      const cartItems = await CartService.addToCart(productId, quantity, userId);

      logger.info(`Product ${productId} added to cart for user ${userId || "anonymous"}`);
      return APIResponse.created(res, cartItems, SUCCESS_MESSAGES.PRODUCT_ADDED_TO_CART);
    } catch (err) {
      logger.error("Error adding to cart", err);
      return APIResponse.serverError(res);
    }
  }

  static async removeFromCart(req, res) {
    try {
      const { productId } = req.params;
      const userId = req.user?.id || null;

      if (!productId || isNaN(productId)) {
        return APIResponse.badRequest(res, ERROR_MESSAGES.INVALID_PRODUCT_ID);
      }

      const cartItems = await CartService.removeFromCart(productId, userId);

      logger.info(`Product ${productId} removed from cart for user ${userId || "anonymous"}`);
      return APIResponse.success(res, cartItems, SUCCESS_MESSAGES.CART_ITEM_DELETED);
    } catch (err) {
      logger.error("Error removing from cart", err);
      return APIResponse.serverError(res);
    }
  }

  static async updateCartItemQuantity(req, res) {
    try {
      const { productId } = req.params;
      const { quantity } = req.body;
      const userId = req.user?.id || null;

      // Validate input
      const validation = validateCartItem(productId, quantity);
      if (!validation.isValid) {
        logger.warn("Update cart item validation failed", validation.errors);
        return APIResponse.badRequest(res, "Validation failed", validation.errors);
      }

      const cartItems = await CartService.updateCartItemQuantity(productId, quantity, userId);

      logger.info(`Product ${productId} quantity updated to ${quantity}`);
      return APIResponse.success(res, cartItems, "Quantity updated successfully");
    } catch (err) {
      logger.error("Error updating cart item quantity", err);
      return APIResponse.serverError(res);
    }
  }

  static async clearCart(req, res) {
    try {
      const userId = req.user?.id || null;

      await CartService.clearCart(userId);

      logger.info(`Cart cleared for user ${userId || "anonymous"}`);
      return APIResponse.success(res, [], "Cart cleared successfully");
    } catch (err) {
      logger.error("Error clearing cart", err);
      return APIResponse.serverError(res);
    }
  }
}

module.exports = CartController;
