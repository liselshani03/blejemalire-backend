const express = require("express");
const ReportController = require("../controllers/report.controller");
const authMiddleware = require("../middleware/auth");
const adminMiddleware = require("../middleware/admin");

const router = express.Router();

// All report routes require authentication and admin role
router.use(authMiddleware);
router.use(adminMiddleware);

// Report CRUD operations
router.post("/", ReportController.createReport);
router.get("/", ReportController.getAllReports);
router.get("/:id", ReportController.getReportById);
router.put("/:id", ReportController.updateReport);
router.delete("/:id", ReportController.deleteReport);

// Export routes (positioned after specific routes to avoid conflicts)
router.get("/:id/export/csv", ReportController.exportReportAsCSV);
router.get("/:id/export/json", ReportController.exportReportAsJSON);

// Activity logs
router.get("/activity/logs", ReportController.getActivityLogs);

module.exports = router;
