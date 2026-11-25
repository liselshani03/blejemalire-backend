const express = require("express");
const SearchController = require("../controllers/search.controller");

const router = express.Router();

// Advanced search with filters and sorting
router.get("/", SearchController.searchProducts);

// Get search filters metadata
router.get("/filters/metadata", SearchController.getSearchFilters);

// Get products by category
router.get("/category/:category", SearchController.getByCategory);

// Get on-sale products
router.get("/sale/active", SearchController.getOnSaleProducts);

module.exports = router;
