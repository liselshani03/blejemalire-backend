const AdminProductService = require("../services/admin.product.service");
const APIResponse = require("../utils/response");
const logger = require("../utils/logger");

class AdminProductController {
  static async createProduct(req, res) {
    try {
      const { name, description, price, old_price, image, category, discount_ends_at, store } = req.body;

      // Validation
      if (!name || !price || !category) {
        logger.warn("Product creation validation failed");
        return APIResponse.badRequest(res, "Name, price, and category are required");
      }

      if (price < 0 || (old_price && old_price < 0)) {
        return APIResponse.badRequest(res, "Price cannot be negative");
      }

      const product = await AdminProductService.createProduct({
        name,
        description: description || "",
        price,
        old_price: old_price || price,
        image: image || "https://via.placeholder.com/300",
        category,
        discount_ends_at: discount_ends_at || null,
        store: store || null,
      });

      logger.info(`Product created by admin: ${name}`);

      return APIResponse.created(res, product, "Product created successfully");
    } catch (err) {
      logger.error("Error creating product", err);
      return APIResponse.serverError(res);
    }
  }

  static async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const { name, description, price, old_price, image, category, discount_ends_at, store } = req.body;

      if (!id) {
        return APIResponse.badRequest(res, "Product ID is required");
      }

      if (price !== undefined && price < 0) {
        return APIResponse.badRequest(res, "Price cannot be negative");
      }

      if (old_price !== undefined && old_price < 0) {
        return APIResponse.badRequest(res, "Old price cannot be negative");
      }

      const product = await AdminProductService.updateProduct(id, {
        name,
        description,
        price,
        old_price,
        image,
        category,
        discount_ends_at,
        store,
      });

      logger.info(`Product updated by admin: ${id}`);

      return APIResponse.success(res, product, "Product updated successfully");
    } catch (err) {
      if (err.message === "Product not found") {
        return APIResponse.error(res, "Product not found", 404);
      }
      logger.error("Error updating product", err);
      return APIResponse.serverError(res);
    }
  }

  static async deleteProduct(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return APIResponse.badRequest(res, "Product ID is required");
      }

      const result = await AdminProductService.deleteProduct(id);

      logger.info(`Product deleted by admin: ${id}`);

      return APIResponse.success(res, result, "Product deleted successfully");
    } catch (err) {
      if (err.message === "Product not found") {
        return APIResponse.error(res, "Product not found", 404);
      }
      logger.error("Error deleting product", err);
      return APIResponse.serverError(res);
    }
  }

  static async getProductStats(req, res) {
    try {
      const stats = await AdminProductService.getProductStats();
      return APIResponse.success(res, stats, "Product statistics retrieved");
    } catch (err) {
      logger.error("Error getting product stats", err);
      return APIResponse.serverError(res);
    }
  }

  static async getProducts(req, res) {
    try {
      const products = await AdminProductService.getProducts();
      return APIResponse.success(res, products, "Products retrieved");
    } catch (err) {
      logger.error("Error fetching products", err);
      return APIResponse.serverError(res);
    }
  }
}

module.exports = AdminProductController;
