const express = require("express");
const DataExportImportController = require("../controllers/dataExportImport.controller");
const authMiddleware = require("../middleware/auth");
const adminMiddleware = require("../middleware/admin");

const router = express.Router();

// All export/import routes require authentication and admin role
router.use(authMiddleware);
router.use(adminMiddleware);

// Product export/import
router.get("/products", DataExportImportController.exportProducts);
router.post("/products", DataExportImportController.importProducts);

// Activity logs export
router.get("/activity-logs", DataExportImportController.exportActivityLogs);

module.exports = router;
