const Papa = require("papaparse");
const pool = require("../config/database");
const logger = require("../utils/logger");
const ReportService = require("./report.service");

class DataExportImportService {
  // Export products as CSV
  static async exportProductsAsCSV() {
    try {
      const result = await pool.query(
        "SELECT id, name, description, price, old_price, image, category, discount_ends_at, created_at FROM products ORDER BY created_at DESC"
      );

      const csvData = result.rows.map((product) => ({
        ID: product.id,
        Name: product.name,
        Description: product.description || "",
        Price: product.price,
        "Original Price": product.old_price,
        Image: product.image,
        Category: product.category,
        "Discount Until": product.discount_ends_at
          ? new Date(product.discount_ends_at).toISOString().split("T")[0]
          : "",
        "Created At": new Date(product.created_at).toISOString(),
      }));

      const csv = Papa.unparse(csvData);
      return csv;
    } catch (error) {
      logger.error("Error exporting products as CSV:", error);
      throw error;
    }
  }

  // Export products as JSON
  static async exportProductsAsJSON() {
    try {
      const result = await pool.query(
        "SELECT id, name, description, price, old_price, image, category, discount_ends_at, created_at FROM products ORDER BY created_at DESC"
      );

      return result.rows;
    } catch (error) {
      logger.error("Error exporting products as JSON:", error);
      throw error;
    }
  }

  // Export all products data
  static async exportAllProducts(format = "json") {
    try {
      if (format === "csv") {
        return await this.exportProductsAsCSV();
      }
      return await this.exportProductsAsJSON();
    } catch (error) {
      logger.error("Error exporting all products:", error);
      throw error;
    }
  }

  // Import products from CSV
  static async importProductsFromCSV(csvContent) {
    try {
      return new Promise((resolve, reject) => {
        Papa.parse(csvContent, {
          header: true,
          skipEmptyLines: true,
          complete: async (results) => {
            try {
              const products = results.data;
              let successCount = 0;
              let errorCount = 0;
              const errors = [];

              for (const product of products) {
                try {
                  // Validate required fields
                  if (!product.Name || !product.Price || !product.Category) {
                    errorCount++;
                    errors.push({
                      row: product,
                      error: "Missing required fields: Name, Price, Category",
                    });
                    continue;
                  }

                  const discountEndsAt = product["Discount Until"]
                    ? new Date(product["Discount Until"])
                    : null;

                  await pool.query(
                    `INSERT INTO products (name, description, price, old_price, image, category, discount_ends_at)
                     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                    [
                      product.Name,
                      product.Description || "",
                      parseFloat(product.Price),
                      product["Original Price"] ? parseFloat(product["Original Price"]) : parseFloat(product.Price),
                      product.Image || "https://via.placeholder.com/300",
                      product.Category,
                      discountEndsAt,
                    ]
                  );

                  successCount++;
                } catch (error) {
                  errorCount++;
                  errors.push({
                    row: product,
                    error: error.message,
                  });
                }
              }

              resolve({
                successCount,
                errorCount,
                errors,
                message: `Successfully imported ${successCount} products. ${errorCount} failed.`,
              });
            } catch (error) {
              reject(error);
            }
          },
          error: (error) => {
            reject(error);
          },
        });
      });
    } catch (error) {
      logger.error("Error importing products from CSV:", error);
      throw error;
    }
  }

  // Import products from JSON
  static async importProductsFromJSON(jsonData) {
    try {
      const products = Array.isArray(jsonData) ? jsonData : [jsonData];
      let successCount = 0;
      let errorCount = 0;
      const errors = [];

      for (const product of products) {
        try {
          // Validate required fields
          if (!product.name || !product.price || !product.category) {
            errorCount++;
            errors.push({
              row: product,
              error: "Missing required fields: name, price, category",
            });
            continue;
          }

          const discountEndsAt = product.discount_ends_at
            ? new Date(product.discount_ends_at)
            : null;

          await pool.query(
            `INSERT INTO products (name, description, price, old_price, image, category, discount_ends_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [
              product.name,
              product.description || "",
              parseFloat(product.price),
              product.old_price ? parseFloat(product.old_price) : parseFloat(product.price),
              product.image || "https://via.placeholder.com/300",
              product.category,
              discountEndsAt,
            ]
          );

          successCount++;
        } catch (error) {
          errorCount++;
          errors.push({
            row: product,
            error: error.message,
          });
        }
      }

      return {
        successCount,
        errorCount,
        errors,
        message: `Successfully imported ${successCount} products. ${errorCount} failed.`,
      };
    } catch (error) {
      logger.error("Error importing products from JSON:", error);
      throw error;
    }
  }

  // Export activity logs as CSV
  static async exportActivityLogsAsCSV(filters = {}) {
    try {
      const logs = await ReportService.getActivityLogs(filters);

      const csvData = logs.map((log) => ({
        "User ID": log.userId,
        Email: log.userEmail,
        Action: log.action,
        Resource: log.resource || "",
        "Resource ID": log.resourceId || "",
        Status: log.status,
        "Created At": new Date(log.createdAt).toISOString(),
      }));

      const csv = Papa.unparse(csvData);
      return csv;
    } catch (error) {
      logger.error("Error exporting activity logs as CSV:", error);
      throw error;
    }
  }

  // Export activity logs as JSON
  static async exportActivityLogsAsJSON(filters = {}) {
    try {
      const logs = await ReportService.getActivityLogs(filters);
      return logs;
    } catch (error) {
      logger.error("Error exporting activity logs as JSON:", error);
      throw error;
    }
  }
}

module.exports = DataExportImportService;
