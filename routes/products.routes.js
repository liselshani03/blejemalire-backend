const express = require("express");
const router = express.Router();

const pool = require("../db");

// GET ALL PRODUCTS FROM DATABASE
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");

    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;