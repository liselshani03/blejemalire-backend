const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

const pool = require("../db");


// ======================
// GET CART
// ======================
router.get("/", authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        cart_items.id AS cart_id,
        cart_items.product_id,
        cart_items.quantity,
        products.name,
        products.price,
        products.old_price,
        products.image
      FROM cart_items
      JOIN products ON cart_items.product_id = products.id
    `);

    res.json(result.rows);
  } catch (err) {
    console.log("GET CART ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// ======================
// ADD TO CART
// ======================
router.post("/", authMiddleware, async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    const productId = req.body.id;
    const quantity = req.body.quantity || 1;

    if (!productId) {
      return res.status(400).json({ error: "Product ID missing" });
    }

    // check if exists
    const existing = await pool.query(
      "SELECT * FROM cart_items WHERE product_id = $1",
      [productId]
    );

    if (existing.rows.length > 0) {
      await pool.query(
        "UPDATE cart_items SET quantity = quantity + $1 WHERE product_id = $2",
        [quantity, productId]
      );
    } else {
      await pool.query(
        "INSERT INTO cart_items (product_id, quantity) VALUES ($1, $2)",
        [productId, quantity]
      );
    }

    const result = await pool.query(`
      SELECT 
        cart_items.id AS cart_id,
        cart_items.product_id,
        cart_items.quantity,
        products.name,
        products.price,
        products.old_price,
        products.image
      FROM cart_items
      JOIN products ON cart_items.product_id = products.id
    `);

    res.json(result.rows);

  } catch (err) {
    console.log("ADD TO CART ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// ======================
// DELETE FROM CART
// ======================
router.delete("/:productId", authMiddleware, async (req, res) => {
  try {
    const productId = Number(req.params.productId);

    await pool.query(
      "DELETE FROM cart_items WHERE product_id = $1",
      [productId]
    );

    const result = await pool.query(`
      SELECT 
        cart_items.id AS cart_id,
        cart_items.product_id,
        cart_items.quantity,
        products.name,
        products.price,
        products.old_price,
        products.image
      FROM cart_items
      JOIN products ON cart_items.product_id = products.id
    `);

    res.json(result.rows);

  } catch (err) {
    console.log("DELETE CART ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;