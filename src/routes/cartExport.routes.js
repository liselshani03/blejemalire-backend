const express = require("express");
const CartExportController = require("../controllers/cartExport.controller");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// All cart export routes require authentication
router.use(authMiddleware);

// Export cart in different formats
router.get("/export/excel", CartExportController.exportAsExcel);
router.get("/export/csv", CartExportController.exportAsCSV);
router.get("/export/pdf", CartExportController.exportAsPDF);

module.exports = router;
