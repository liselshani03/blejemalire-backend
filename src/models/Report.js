const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      enum: ["sales", "inventory", "users", "custom"],
      default: "custom",
      required: true,
    },
    reportData: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    filters: {
      startDate: Date,
      endDate: Date,
      category: String,
      status: String,
      customFilters: mongoose.Schema.Types.Mixed,
    },
    format: {
      type: String,
      enum: ["json", "csv"],
      default: "json",
    },
    createdBy: {
      type: String,
      required: true,
    },
    isPublic: {
      type: Boolean,
      default: false,
    },
    tags: [String],
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "completed",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", ReportSchema);
