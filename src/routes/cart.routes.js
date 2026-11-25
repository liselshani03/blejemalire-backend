const express = require("express");
const router = express.Router();
const CartController = require("../controllers/cart.controller");
const authMiddleware = require("../middleware/auth");

// All cart routes require authentication
router.use(authMiddleware);

// GET /cart
router.get("/", CartController.getCart);

// POST /cart
router.post("/", CartController.addToCart);

// DELETE /cart/:productId
router.delete("/:productId", CartController.removeFromCart);

// PUT /cart/:productId
router.put("/:productId", CartController.updateCartItemQuantity);

// DELETE /cart (clear entire cart)
router.delete("/", CartController.clearCart);

module.exports = router;
