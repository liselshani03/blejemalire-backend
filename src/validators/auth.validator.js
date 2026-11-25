const { ERROR_MESSAGES } = require("../constants/http");

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password && password.length >= 8;
};

const validateSignup = (email, password) => {
  const errors = {};

  if (!email || !validateEmail(email)) {
    errors.email = ERROR_MESSAGES.INVALID_EMAIL;
  }

  if (!password || !validatePassword(password)) {
    errors.password = ERROR_MESSAGES.INVALID_PASSWORD;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors: Object.keys(errors).length > 0 ? errors : null,
  };
};

const validateLogin = (email, password) => {
  const errors = {};

  if (!email || !validateEmail(email)) {
    errors.email = ERROR_MESSAGES.INVALID_EMAIL;
  }

  if (!password) {
    errors.password = "Password is required";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors: Object.keys(errors).length > 0 ? errors : null,
  };
};

module.exports = {
  validateEmail,
  validatePassword,
  validateSignup,
  validateLogin,
};
