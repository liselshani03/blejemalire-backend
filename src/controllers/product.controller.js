const ProductService = require("../services/product.service");
const APIResponse = require("../utils/response");
const { ERROR_MESSAGES, SUCCESS_MESSAGES } = require("../constants/http");
const logger = require("../utils/logger");

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const { category, minPrice, maxPrice, search } = req.query;

      const filters = {
        category: category || null,
        minPrice: minPrice ? parseFloat(minPrice) : null,
        maxPrice: maxPrice ? parseFloat(maxPrice) : null,
        search: search || null,
      };

      const products = await ProductService.getAllProducts(filters);

      if (products.length === 0) {
        logger.info("No products found with applied filters");
        return APIResponse.success(res, [], SUCCESS_MESSAGES.PRODUCT_FETCHED);
      }

      logger.info(`Products fetched: ${products.length} items`);
      return APIResponse.success(res, products, SUCCESS_MESSAGES.PRODUCT_FETCHED);
    } catch (err) {
      logger.error("Error fetching products", err);
      return APIResponse.serverError(res);
    }
  }

  static async getProductById(req, res) {
    try {
      const { id } = req.params;

      if (!id || isNaN(id)) {
        return APIResponse.badRequest(res, ERROR_MESSAGES.INVALID_PRODUCT_ID);
      }

      const product = await ProductService.getProductById(id);

      if (!product) {
        logger.warn(`Product not found: ${id}`);
        return APIResponse.notFound(res, ERROR_MESSAGES.PRODUCT_NOT_FOUND);
      }

      logger.info(`Product fetched: ${id}`);
      return APIResponse.success(res, product, SUCCESS_MESSAGES.PRODUCT_FETCHED);
    } catch (err) {
      logger.error("Error fetching product", err);
      return APIResponse.serverError(res);
    }
  }

  static async searchProducts(req, res) {
    try {
      const { q } = req.query;

      if (!q || q.trim().length === 0) {
        return APIResponse.badRequest(res, "Search query is required");
      }

      const products = await ProductService.searchProducts(q);

      logger.info(`Products searched for "${q}": ${products.length} results`);
      return APIResponse.success(res, products, "Search results");
    } catch (err) {
      logger.error("Error searching products", err);
      return APIResponse.serverError(res);
    }
  }

  static async getProductsByStore(req, res) {
    try {
      const { storeId } = req.params;

      if (!storeId || isNaN(storeId)) {
        return APIResponse.badRequest(res, "Invalid store ID");
      }

      const products = await ProductService.getProductsByStore(storeId);

      logger.info(`Products fetched for store ${storeId}: ${products.length} items`);
      return APIResponse.success(res, products, SUCCESS_MESSAGES.PRODUCT_FETCHED);
    } catch (err) {
      logger.error("Error fetching products by store", err);
      return APIResponse.serverError(res);
    }
  }
}

module.exports = ProductController;
