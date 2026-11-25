const CartExportService = require("../services/cartExport.service");
const APIResponse = require("../utils/response");
const logger = require("../utils/logger");
const ReportService = require("../services/report.service");

class CartExportController {
  /**
   * Export cart as Excel
   */
  static async exportAsExcel(req, res) {
    try {
      const userId = req.user.id;

      const buffer = await CartExportService.exportAsExcel(userId);

      res.header("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
      res.header("Content-Disposition", `attachment; filename="cart_${new Date().getTime()}.xlsx"`);
      res.send(buffer);

      // Log activity
      await ReportService.logActivity({
        userId: req.user.id,
        userEmail: req.user.email,
        action: "export_data",
        resource: "Cart",
        details: { format: "xlsx" },
      });

      logger.info(`Cart exported as Excel by user ${userId}`);
    } catch (error) {
      if (error.message === "Cart is empty") {
        return APIResponse.badRequest(res, "Your cart is empty");
      }
      logger.error("Error exporting cart as Excel:", error);
      return APIResponse.serverError(res);
    }
  }

  /**
   * Export cart as CSV
   */
  static async exportAsCSV(req, res) {
    try {
      const userId = req.user.id;

      const csv = await CartExportService.exportAsCSV(userId);

      res.header("Content-Type", "text/csv");
      res.header("Content-Disposition", `attachment; filename="cart_${new Date().getTime()}.csv"`);
      res.send(csv);

      // Log activity
      await ReportService.logActivity({
        userId: req.user.id,
        userEmail: req.user.email,
        action: "export_data",
        resource: "Cart",
        details: { format: "csv" },
      });

      logger.info(`Cart exported as CSV by user ${userId}`);
    } catch (error) {
      if (error.message === "Cart is empty") {
        return APIResponse.badRequest(res, "Your cart is empty");
      }
      logger.error("Error exporting cart as CSV:", error);
      return APIResponse.serverError(res);
    }
  }

  /**
   * Export cart as PDF
   */
  static async exportAsPDF(req, res) {
    try {
      const userId = req.user.id;

      const buffer = await CartExportService.exportAsPDF(userId);

      res.header("Content-Type", "application/pdf");
      res.header("Content-Disposition", `attachment; filename="cart_${new Date().getTime()}.pdf"`);
      res.send(buffer);

      // Log activity
      await ReportService.logActivity({
        userId: req.user.id,
        userEmail: req.user.email,
        action: "export_data",
        resource: "Cart",
        details: { format: "pdf" },
      });

      logger.info(`Cart exported as PDF by user ${userId}`);
    } catch (error) {
      if (error.message === "Cart is empty") {
        return APIResponse.badRequest(res, "Your cart is empty");
      }
      logger.error("Error exporting cart as PDF:", error);
      return APIResponse.serverError(res);
    }
  }
}

module.exports = CartExportController;
