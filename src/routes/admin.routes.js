const express = require("express");
const router = express.Router();
const AdminProductController = require("../controllers/admin.product.controller");
const authMiddleware = require("../middleware/auth");
const adminMiddleware = require("../middleware/admin");

// All routes require authentication first, then admin check
router.use(authMiddleware);
router.use(adminMiddleware);

// POST /api/admin/products - Create product
router.post("/products", AdminProductController.createProduct);

// GET /api/admin/products/stats - Product statistics (must be before /:id route)
router.get("/products/stats", AdminProductController.getProductStats);

// GET /api/admin/products - List all products (admin only)
router.get("/products", AdminProductController.getProducts);

// PUT /api/admin/products/:id - Update product
router.put("/products/:id", AdminProductController.updateProduct);

// DELETE /api/admin/products/:id - Delete product
router.delete("/products/:id", AdminProductController.deleteProduct);

module.exports = router;
