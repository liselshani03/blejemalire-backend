const ReportService = require("../services/report.service");
const APIResponse = require("../utils/response");
const logger = require("../utils/logger");
const Papa = require("papaparse");

class ReportController {
  // Create new report
  static async createReport(req, res) {
    try {
      const { title, description, type, filters, format, tags } = req.body;

      if (!title || !type) {
        return APIResponse.badRequest(res, "Title and type are required");
      }

      const reportData = {
        title,
        description,
        type,
        filters,
        format: format || "json",
        createdBy: req.user.email,
        tags: tags || [],
        reportData: {},
      };

      // Generate report data based on type
      if (type === "sales" && filters?.startDate && filters?.endDate) {
        reportData.reportData = await ReportService.generateSalesReport(
          filters.startDate,
          filters.endDate
        );
      } else if (type === "inventory") {
        reportData.reportData = await ReportService.generateInventoryReport();
      } else if (type === "users") {
        reportData.reportData = await ReportService.generateUsersReport();
      }

      const report = await ReportService.createReport(reportData);

      // Log activity
      await ReportService.logActivity({
        userId: req.user.id,
        userEmail: req.user.email,
        action: "generate_report",
        resource: "Report",
        resourceId: report._id.toString(),
        details: { type, title },
      });

      logger.info(`Report created by ${req.user.email}: ${report._id}`);
      return APIResponse.created(res, report, "Report created successfully");
    } catch (error) {
      logger.error("Error creating report:", error);
      return APIResponse.serverError(res);
    }
  }

  // Get all reports
  static async getAllReports(req, res) {
    try {
      const { type, createdBy } = req.query;
      const filters = {};

      if (type) filters.type = type;
      if (createdBy) filters.createdBy = createdBy;

      const reports = await ReportService.getAllReports(filters);
      return APIResponse.success(res, reports, "Reports fetched successfully");
    } catch (error) {
      logger.error("Error fetching reports:", error);
      return APIResponse.serverError(res);
    }
  }

  // Get report by ID
  static async getReportById(req, res) {
    try {
      const { id } = req.params;
      const report = await ReportService.getReportById(id);
      return APIResponse.success(res, report, "Report fetched successfully");
    } catch (error) {
      if (error.message === "Report not found") {
        return APIResponse.error(res, "Report not found", 404);
      }
      logger.error("Error fetching report:", error);
      return APIResponse.serverError(res);
    }
  }

  // Update report
  static async updateReport(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const report = await ReportService.updateReport(id, updateData);

      await ReportService.logActivity({
        userId: req.user.id,
        userEmail: req.user.email,
        action: "other",
        resource: "Report",
        resourceId: id,
        details: { action: "update_report" },
      });

      return APIResponse.success(res, report, "Report updated successfully");
    } catch (error) {
      if (error.message === "Report not found") {
        return APIResponse.error(res, "Report not found", 404);
      }
      logger.error("Error updating report:", error);
      return APIResponse.serverError(res);
    }
  }

  // Delete report
  static async deleteReport(req, res) {
    try {
      const { id } = req.params;
      const report = await ReportService.deleteReport(id);

      await ReportService.logActivity({
        userId: req.user.id,
        userEmail: req.user.email,
        action: "other",
        resource: "Report",
        resourceId: id,
        details: { action: "delete_report" },
      });

      return APIResponse.success(res, report, "Report deleted successfully");
    } catch (error) {
      if (error.message === "Report not found") {
        return APIResponse.error(res, "Report not found", 404);
      }
      logger.error("Error deleting report:", error);
      return APIResponse.serverError(res);
    }
  }

  // Export report as CSV
  static async exportReportAsCSV(req, res) {
    try {
      const { id } = req.params;
      const report = await ReportService.getReportById(id);

      let csvData = [];

      if (report.type === "sales" && report.reportData.activities) {
        csvData = report.reportData.activities.map((activity) => ({
          "User ID": activity.userId,
          Email: activity.userEmail,
          Action: activity.action,
          Date: new Date(activity.createdAt).toISOString(),
        }));
      } else if (report.type === "inventory" && report.reportData.categories) {
        csvData = report.reportData.categories.map((cat) => ({
          Category: cat.category,
          "Product Count": cat.count,
          "Average Price": cat.avg_price,
          "Max Price": cat.max_price,
          "Min Price": cat.min_price,
        }));
      } else {
        csvData = [{ "Report Data": JSON.stringify(report.reportData) }];
      }

      const csv = Papa.unparse(csvData);

      res.header("Content-Type", "text/csv");
      res.header("Content-Disposition", `attachment; filename="${report.title}.csv"`);
      res.send(csv);

      await ReportService.logActivity({
        userId: req.user.id,
        userEmail: req.user.email,
        action: "export_data",
        resource: "Report",
        resourceId: id,
        details: { format: "csv" },
      });
    } catch (error) {
      if (error.message === "Report not found") {
        return APIResponse.error(res, "Report not found", 404);
      }
      logger.error("Error exporting report:", error);
      return APIResponse.serverError(res);
    }
  }

  // Export report as JSON
  static async exportReportAsJSON(req, res) {
    try {
      const { id } = req.params;
      const report = await ReportService.getReportById(id);

      res.header("Content-Type", "application/json");
      res.header("Content-Disposition", `attachment; filename="${report.title}.json"`);
      res.json(report);

      await ReportService.logActivity({
        userId: req.user.id,
        userEmail: req.user.email,
        action: "export_data",
        resource: "Report",
        resourceId: id,
        details: { format: "json" },
      });
    } catch (error) {
      if (error.message === "Report not found") {
        return APIResponse.error(res, "Report not found", 404);
      }
      logger.error("Error exporting report:", error);
      return APIResponse.serverError(res);
    }
  }

  // Get activity logs
  static async getActivityLogs(req, res) {
    try {
      const { userId, action, startDate, endDate } = req.query;
      const filters = {};

      if (userId) filters.userId = userId;
      if (action) filters.action = action;
      if (startDate || endDate) {
        filters.createdAt = {};
        if (startDate) filters.createdAt.$gte = new Date(startDate);
        if (endDate) filters.createdAt.$lte = new Date(endDate);
      }

      const logs = await ReportService.getActivityLogs(filters);
      return APIResponse.success(res, logs, "Activity logs fetched successfully");
    } catch (error) {
      logger.error("Error fetching activity logs:", error);
      return APIResponse.serverError(res);
    }
  }
}

module.exports = ReportController;
