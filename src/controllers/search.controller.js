const SearchService = require("../services/search.service");
const APIResponse = require("../utils/response");
const logger = require("../utils/logger");

class SearchController {
  /**
   * Advanced product search with filters and sorting
   */
  static async searchProducts(req, res) {
    try {
      const {
        search = "",
        category = "",
        minPrice = 0,
        maxPrice = null,
        onSale = false,
        sortBy = "created_at",
        order = "DESC",
        page = 1,
        limit = 20,
        startDate = null,
        endDate = null,
      } = req.query;

      // Validate inputs
      const parsedPage = Math.max(1, parseInt(page, 10) || 1);
      const parsedLimit = Math.min(100, Math.max(1, parseInt(limit, 10) || 20));
      const offset = (parsedPage - 1) * parsedLimit;

      const filters = {
        search,
        category,
        minPrice: parseFloat(minPrice) || 0,
        maxPrice: maxPrice ? parseFloat(maxPrice) : Infinity,
        onSale,
        sortBy,
        order: order.toUpperCase(),
        limit: parsedLimit,
        offset,
        startDate,
        endDate,
      };

      // Execute search
      const products = await SearchService.searchProducts(filters);
      const total = await SearchService.getProductCount(filters);

      const data = {
        products,
        pagination: {
          page: parsedPage,
          limit: parsedLimit,
          total,
          totalPages: Math.ceil(total / parsedLimit),
          hasNextPage: parsedPage < Math.ceil(total / parsedLimit),
          hasPrevPage: parsedPage > 1,
        },
      };

      return APIResponse.success(
        res,
        data,
        `Found ${products.length} products`
      );
    } catch (error) {
      logger.error("Error searching products:", error);
      return APIResponse.serverError(res);
    }
  }

  /**
   * Get search filters metadata (categories, price range)
   */
  static async getSearchFilters(req, res) {
    try {
      const categories = await SearchService.getCategories();
      const priceStats = await SearchService.getPriceStats();

      const data = {
        categories,
        priceRange: {
          min: parseFloat(priceStats.min_price) || 0,
          max: parseFloat(priceStats.max_price) || 0,
          avg: parseFloat(priceStats.avg_price) || 0,
        },
        sortOptions: [
          { value: "created_at", label: "Newest First" },
          { value: "price", label: "Price: Low to High" },
          { value: "name", label: "Name: A to Z" },
          { value: "discount", label: "Biggest Discount" },
        ],
      };

      return APIResponse.success(res, data, "Search filters fetched");
    } catch (error) {
      logger.error("Error fetching search filters:", error);
      return APIResponse.serverError(res);
    }
  }

  /**
   * Get products by category with pagination
   */
  static async getByCategory(req, res) {
    try {
      const { category } = req.params;
      const { page = 1, limit = 20, sortBy = "created_at", order = "DESC" } =
        req.query;

      const parsedPage = Math.max(1, parseInt(page, 10) || 1);
      const parsedLimit = Math.min(100, Math.max(1, parseInt(limit, 10) || 20));
      const offset = (parsedPage - 1) * parsedLimit;

      const filters = {
        category,
        sortBy,
        order: order.toUpperCase(),
        limit: parsedLimit,
        offset,
      };

      const products = await SearchService.searchProducts(filters);
      const total = await SearchService.getProductCount(filters);

      const data = {
        products,
        pagination: {
          page: parsedPage,
          limit: parsedLimit,
          total,
          totalPages: Math.ceil(total / parsedLimit),
          hasNextPage: parsedPage < Math.ceil(total / parsedLimit),
          hasPrevPage: parsedPage > 1,
        },
      };

      return APIResponse.success(res, data, `Category: ${category}`);
    } catch (error) {
      logger.error("Error fetching products by category:", error);
      return APIResponse.serverError(res);
    }
  }

  /**
   * Get on-sale products (with active discounts)
   */
  static async getOnSaleProducts(req, res) {
    try {
      const { page = 1, limit = 20, sortBy = "discount", order = "DESC" } =
        req.query;

      const parsedPage = Math.max(1, parseInt(page, 10) || 1);
      const parsedLimit = Math.min(100, Math.max(1, parseInt(limit, 10) || 20));
      const offset = (parsedPage - 1) * parsedLimit;

      const filters = {
        onSale: true,
        sortBy,
        order: order.toUpperCase(),
        limit: parsedLimit,
        offset,
      };

      const products = await SearchService.searchProducts(filters);
      const total = await SearchService.getProductCount(filters);

      const data = {
        products,
        pagination: {
          page: parsedPage,
          limit: parsedLimit,
          total,
          totalPages: Math.ceil(total / parsedLimit),
          hasNextPage: parsedPage < Math.ceil(total / parsedLimit),
          hasPrevPage: parsedPage > 1,
        },
      };

      return APIResponse.success(res, data, "On-sale products fetched");
    } catch (error) {
      logger.error("Error fetching on-sale products:", error);
      return APIResponse.serverError(res);
    }
  }
}

module.exports = SearchController;
