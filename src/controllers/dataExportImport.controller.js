const DataExportImportService = require("../services/dataExportImport.service");
const APIResponse = require("../utils/response");
const logger = require("../utils/logger");
const ReportService = require("../services/report.service");

class DataExportImportController {
  // Export products
  static async exportProducts(req, res) {
    try {
      const { format = "json" } = req.query;

      if (!["json", "csv"].includes(format)) {
        return APIResponse.badRequest(res, "Format must be 'json' or 'csv'");
      }

      const data = await DataExportImportService.exportAllProducts(format);

      res.header("Content-Type", format === "csv" ? "text/csv" : "application/json");
      res.header(
        "Content-Disposition",
        `attachment; filename="products.${format}"`
      );

      if (format === "csv") {
        res.send(data);
      } else {
        res.json(data);
      }

      // Log activity
      await ReportService.logActivity({
        userId: req.user.id,
        userEmail: req.user.email,
        action: "export_data",
        resource: "Products",
        details: { format, count: data.length || 0 },
      });
    } catch (error) {
      logger.error("Error exporting products:", error);
      return APIResponse.serverError(res);
    }
  }

  // Import products
  static async importProducts(req, res) {
    try {
      const { format = "json" } = req.query;

      if (!["json", "csv"].includes(format)) {
        return APIResponse.badRequest(res, "Format must be 'json' or 'csv'");
      }

      if (!req.body || Object.keys(req.body).length === 0) {
        return APIResponse.badRequest(res, "No data provided for import");
      }

      let result;

      if (format === "csv") {
        // Expecting CSV string in body
        const csvContent = typeof req.body === "string" ? req.body : JSON.stringify(req.body);
        result = await DataExportImportService.importProductsFromCSV(csvContent);
      } else {
        // JSON format
        result = await DataExportImportService.importProductsFromJSON(req.body);
      }

      // Log activity
      await ReportService.logActivity({
        userId: req.user.id,
        userEmail: req.user.email,
        action: "import_data",
        resource: "Products",
        details: {
          format,
          successCount: result.successCount,
          errorCount: result.errorCount,
        },
      });

      return APIResponse.success(res, result, "Products imported successfully");
    } catch (error) {
      logger.error("Error importing products:", error);
      return APIResponse.serverError(res);
    }
  }

  // Export activity logs
  static async exportActivityLogs(req, res) {
    try {
      const { format = "json", userId, action, startDate, endDate } = req.query;

      if (!["json", "csv"].includes(format)) {
        return APIResponse.badRequest(res, "Format must be 'json' or 'csv'");
      }

      const filters = {};
      if (userId) filters.userId = userId;
      if (action) filters.action = action;
      if (startDate || endDate) {
        filters.createdAt = {};
        if (startDate) filters.createdAt.$gte = new Date(startDate);
        if (endDate) filters.createdAt.$lte = new Date(endDate);
      }

      let data;
      if (format === "csv") {
        data = await DataExportImportService.exportActivityLogsAsCSV(filters);
      } else {
        data = await DataExportImportService.exportActivityLogsAsJSON(filters);
      }

      res.header("Content-Type", format === "csv" ? "text/csv" : "application/json");
      res.header(
        "Content-Disposition",
        `attachment; filename="activity-logs.${format}"`
      );

      if (format === "csv") {
        res.send(data);
      } else {
        res.json(data);
      }

      // Log activity
      await ReportService.logActivity({
        userId: req.user.id,
        userEmail: req.user.email,
        action: "export_data",
        resource: "ActivityLogs",
        details: { format },
      });
    } catch (error) {
      logger.error("Error exporting activity logs:", error);
      return APIResponse.serverError(res);
    }
  }
}

module.exports = DataExportImportController;
