const mongoose = require("mongoose");
const logger = require("../utils/logger");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/blejemalire";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info("MongoDB connected successfully");
    return mongoose.connection;
  } catch (error) {
    logger.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
