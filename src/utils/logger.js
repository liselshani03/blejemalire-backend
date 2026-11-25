const LOG_LEVELS = {
  INFO: "INFO",
  ERROR: "ERROR",
  WARN: "WARN",
  DEBUG: "DEBUG",
};

const logger = {
  info: (message, data = null) => {
    console.log(`[${new Date().toISOString()}] ${LOG_LEVELS.INFO}: ${message}`, data || "");
  },

  error: (message, error = null) => {
    console.error(`[${new Date().toISOString()}] ${LOG_LEVELS.ERROR}: ${message}`);
    if (error) console.error(error);
  },

  warn: (message, data = null) => {
    console.warn(`[${new Date().toISOString()}] ${LOG_LEVELS.WARN}: ${message}`, data || "");
  },

  debug: (message, data = null) => {
    if (process.env.NODE_ENV === "development") {
      console.debug(`[${new Date().toISOString()}] ${LOG_LEVELS.DEBUG}: ${message}`, data || "");
    }
  },
};

module.exports = logger;
