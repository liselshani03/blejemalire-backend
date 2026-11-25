const mongoose = require("mongoose");

const ActivityLogSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
      enum: [
        "login",
        "logout",
        "add_product",
        "update_product",
        "delete_product",
        "add_to_cart",
        "remove_from_cart",
        "checkout",
        "generate_report",
        "export_data",
        "import_data",
        "create_category",
        "update_category",
        "delete_category",
        "other",
      ],
    },
    resource: {
      type: String,
      trim: true,
    },
    resourceId: {
      type: String,
      trim: true,
    },
    details: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    ipAddress: String,
    userAgent: String,
    status: {
      type: String,
      enum: ["success", "failure"],
      default: "success",
    },
    errorMessage: String,
  },
  { timestamps: true }
);

// Index for faster queries
ActivityLogSchema.index({ userId: 1, createdAt: -1 });
ActivityLogSchema.index({ action: 1, createdAt: -1 });
ActivityLogSchema.index({ createdAt: -1 });

module.exports = mongoose.model("ActivityLog", ActivityLogSchema);
