const ExcelJS = require("exceljs");
const PDFDocument = require("pdfkit");
const Papa = require("papaparse");
const pool = require("../config/database");
const logger = require("../utils/logger");

class CartExportService {
  /**
   * Get user's cart with product details
   */
  static async getCartWithDetails(userId) {
    try {
      const result = await pool.query(
        `SELECT 
          ci.id,
          ci.product_id,
          ci.quantity,
          p.name,
          p.price,
          p.old_price,
          p.category,
          p.image,
          (ci.quantity * p.price) as total_price
         FROM cart_items ci
         JOIN products p ON ci.product_id = p.id
         WHERE ci.user_id = $1
         ORDER BY ci.created_at DESC`,
        [userId]
      );

      return result.rows;
    } catch (error) {
      logger.error("Error fetching cart details:", error);
      throw error;
    }
  }

  /**
   * Export cart as Excel (.xlsx)
   */
  static async exportAsExcel(userId) {
    try {
      const cartItems = await this.getCartWithDetails(userId);

      if (cartItems.length === 0) {
        throw new Error("Cart is empty");
      }

      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Shopping Cart");

      // Header styling
      worksheet.columns = [
        { header: "Product Name", key: "name", width: 30 },
        { header: "Category", key: "category", width: 15 },
        { header: "Unit Price", key: "price", width: 12 },
        { header: "Original Price", key: "old_price", width: 15 },
        { header: "Quantity", key: "quantity", width: 10 },
        { header: "Total Price", key: "total_price", width: 15 },
      ];

      // Style header row
      worksheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
      worksheet.getRow(1).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF8B5E3C" }, // Brown color
      };

      // Add data rows
      cartItems.forEach((item) => {
        worksheet.addRow({
          name: item.name,
          category: item.category,
          price: parseFloat(item.price).toFixed(2),
          old_price: item.old_price ? parseFloat(item.old_price).toFixed(2) : "N/A",
          quantity: item.quantity,
          total_price: parseFloat(item.total_price).toFixed(2),
        });
      });

      // Calculate totals
      const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.total_price), 0);
      const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

      // Add totals row
      const totalRow = worksheet.addRow({});
      totalRow.getCell(1).value = "TOTALS";
      totalRow.getCell(1).font = { bold: true };
      totalRow.getCell(5).value = totalItems;
      totalRow.getCell(5).font = { bold: true };
      totalRow.getCell(6).value = subtotal.toFixed(2);
      totalRow.getCell(6).font = { bold: true };
      totalRow.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFECF3E1" }, // Light background
      };

      // Format currency columns
      for (let i = 2; i <= worksheet.rowCount; i++) {
        worksheet.getCell(`C${i}`).numFmt = '$#,##0.00';
        worksheet.getCell(`D${i}`).numFmt = '$#,##0.00';
        worksheet.getCell(`F${i}`).numFmt = '$#,##0.00';
      }

      return await workbook.xlsx.writeBuffer();
    } catch (error) {
      logger.error("Error exporting cart as Excel:", error);
      throw error;
    }
  }

  /**
   * Export cart as CSV
   */
  static async exportAsCSV(userId) {
    try {
      const cartItems = await this.getCartWithDetails(userId);

      if (cartItems.length === 0) {
        throw new Error("Cart is empty");
      }

      const csvData = cartItems.map((item) => ({
        "Product Name": item.name,
        Category: item.category,
        "Unit Price": `$${parseFloat(item.price).toFixed(2)}`,
        "Original Price": item.old_price ? `$${parseFloat(item.old_price).toFixed(2)}` : "N/A",
        Quantity: item.quantity,
        "Total Price": `$${parseFloat(item.total_price).toFixed(2)}`,
      }));

      // Add totals
      const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.total_price), 0);
      const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

      csvData.push({
        "Product Name": "TOTALS",
        Category: "",
        "Unit Price": "",
        "Original Price": "",
        Quantity: totalItems,
        "Total Price": `$${subtotal.toFixed(2)}`,
      });

      const csv = Papa.unparse(csvData);
      return csv;
    } catch (error) {
      logger.error("Error exporting cart as CSV:", error);
      throw error;
    }
  }

  /**
   * Export cart as PDF
   */
  static async exportAsPDF(userId) {
    try {
      const cartItems = await this.getCartWithDetails(userId);

      if (cartItems.length === 0) {
        throw new Error("Cart is empty");
      }

      return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        const buffers = [];

        doc.on("data", (chunk) => buffers.push(chunk));
        doc.on("end", () => resolve(Buffer.concat(buffers)));
        doc.on("error", reject);

        // Header
        doc.fontSize(20).font("Helvetica-Bold").text("Shopping Cart", 50, 50);
        doc.fontSize(10).font("Helvetica").text(`Date: ${new Date().toLocaleDateString()}`, 50, 80);

        // Table headers
        const tableTop = 120;
        const col1 = 50;
        const col2 = 250;
        const col3 = 330;
        const col4 = 410;
        const col5 = 470;
        const rowHeight = 20;

        doc.fontSize(12).font("Helvetica-Bold");
        doc.text("Product", col1, tableTop);
        doc.text("Price", col2, tableTop);
        doc.text("Qty", col3, tableTop);
        doc.text("Total", col4, tableTop);

        // Draw line
        doc.moveTo(50, tableTop + 15).lineTo(550, tableTop + 15).stroke();

        // Table data
        doc.fontSize(10).font("Helvetica");
        let currentY = tableTop + 25;

        cartItems.forEach((item) => {
          doc.text(item.name.substring(0, 25), col1, currentY);
          doc.text(`$${parseFloat(item.price).toFixed(2)}`, col2, currentY);
          doc.text(item.quantity.toString(), col3, currentY);
          doc.text(`$${parseFloat(item.total_price).toFixed(2)}`, col4, currentY);
          currentY += rowHeight;
        });

        // Totals
        const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.total_price), 0);
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

        doc.moveTo(50, currentY).lineTo(550, currentY).stroke();
        currentY += 10;

        doc.fontSize(12).font("Helvetica-Bold");
        doc.text("TOTALS", col1, currentY);
        doc.text(totalItems.toString(), col3, currentY);
        doc.text(`$${subtotal.toFixed(2)}`, col4, currentY);

        doc.end();
      });
    } catch (error) {
      logger.error("Error exporting cart as PDF:", error);
      throw error;
    }
  }
}

module.exports = CartExportService;
