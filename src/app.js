const express = require("express");
const cors = require("cors");
const logger = require("./utils/logger");

// Import routes
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");
const cartExportRoutes = require("./routes/cartExport.routes");
const adminRoutes = require("./routes/admin.routes");
const reportRoutes = require("./routes/report.routes");
const dataExportImportRoutes = require("./routes/dataExportImport.routes");
const searchRoutes = require("./routes/search.routes");

// Import middleware
const errorHandler = require("./middleware/errorHandler");

const app = express();

// ==================
// MIDDLEWARE
// ==================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

// ==================
// ROUTES
// ==================

// Health check
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "🚀 Blejemalire API is running",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/cart-export", cartExportRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/export-import", dataExportImportRoutes);

// 404 handler
app.use((req, res) => {
  logger.warn(`Route not found: ${req.method} ${req.path}`);
  return res.status(404).json({
    success: false,
    message: "Route not found",
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

module.exports = app;
