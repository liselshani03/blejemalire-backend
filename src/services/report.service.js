const Report = require("../models/Report");
const ActivityLog = require("../models/ActivityLog");
const pool = require("../config/database");
const logger = require("../utils/logger");

class ReportService {
  // Create a new report
  static async createReport(reportData) {
    try {
      const report = new Report(reportData);
      await report.save();
      logger.info(`Report created: ${report._id}`);
      return report;
    } catch (error) {
      logger.error("Error creating report:", error);
      throw error;
    }
  }

  // Get all reports
  static async getAllReports(filters = {}) {
    try {
      const reports = await Report.find(filters).sort({ createdAt: -1 });
      return reports;
    } catch (error) {
      logger.error("Error fetching reports:", error);
      throw error;
    }
  }

  // Get report by ID
  static async getReportById(reportId) {
    try {
      const report = await Report.findById(reportId);
      if (!report) {
        throw new Error("Report not found");
      }
      return report;
    } catch (error) {
      logger.error("Error fetching report:", error);
      throw error;
    }
  }

  // Update report
  static async updateReport(reportId, updateData) {
    try {
      const report = await Report.findByIdAndUpdate(
        reportId,
        { $set: updateData },
        { new: true, runValidators: true }
      );
      if (!report) {
        throw new Error("Report not found");
      }
      logger.info(`Report updated: ${reportId}`);
      return report;
    } catch (error) {
      logger.error("Error updating report:", error);
      throw error;
    }
  }

  // Delete report
  static async deleteReport(reportId) {
    try {
      const report = await Report.findByIdAndDelete(reportId);
      if (!report) {
        throw new Error("Report not found");
      }
      logger.info(`Report deleted: ${reportId}`);
      return report;
    } catch (error) {
      logger.error("Error deleting report:", error);
      throw error;
    }
  }

  // Generate sales report
  static async generateSalesReport(startDate, endDate) {
    try {
      // Get activity logs for checkout actions
      const checkouts = await ActivityLog.find({
        action: "checkout",
        createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
      });

      const report = {
        type: "sales",
        totalCheckouts: checkouts.length,
        uniqueUsers: [...new Set(checkouts.map((c) => c.userId))].length,
        activities: checkouts,
      };

      return report;
    } catch (error) {
      logger.error("Error generating sales report:", error);
      throw error;
    }
  }

  // Generate inventory report
  static async generateInventoryReport() {
    try {
      const result = await pool.query(
        "SELECT category, COUNT(*) as count, AVG(price) as avg_price, MAX(price) as max_price, MIN(price) as min_price FROM products GROUP BY category"
      );

      const report = {
        type: "inventory",
        categories: result.rows,
        totalProducts: result.rows.reduce((sum, row) => sum + row.count, 0),
      };

      return report;
    } catch (error) {
      logger.error("Error generating inventory report:", error);
      throw error;
    }
  }

  // Generate users report
  static async generateUsersReport() {
    try {
      const result = await pool.query(
        "SELECT roles.name as role, COUNT(users.id) as count FROM users LEFT JOIN roles ON users.role_id = roles.id GROUP BY roles.name"
      );

      const report = {
        type: "users",
        usersByRole: result.rows,
      };

      return report;
    } catch (error) {
      logger.error("Error generating users report:", error);
      throw error;
    }
  }

  // Log user activity
  static async logActivity(activityData) {
    try {
      const activityLog = new ActivityLog(activityData);
      await activityLog.save();
      logger.info(`Activity logged: ${activityData.action}`);
      return activityLog;
    } catch (error) {
      logger.error("Error logging activity:", error);
      throw error;
    }
  }

  // Get activity logs
  static async getActivityLogs(filters = {}) {
    try {
      const logs = await ActivityLog.find(filters).sort({ createdAt: -1 }).limit(1000);
      return logs;
    } catch (error) {
      logger.error("Error fetching activity logs:", error);
      throw error;
    }
  }
}

module.exports = ReportService;
