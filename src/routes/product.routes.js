const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product.controller");

// GET /products
router.get("/", ProductController.getAllProducts);

// GET /products/search?q=query
router.get("/search", ProductController.searchProducts);

// GET /products/store/:storeId
router.get("/store/:storeId", ProductController.getProductsByStore);

// GET /products/:id
router.get("/:id", ProductController.getProductById);

module.exports = router;
