const { ERROR_MESSAGES } = require("../constants/http");

const validateCartItem = (productId, quantity) => {
  const errors = {};

  if (!productId || isNaN(productId) || productId <= 0) {
    errors.productId = ERROR_MESSAGES.INVALID_PRODUCT_ID;
  }

  if (!quantity || isNaN(quantity) || quantity <= 0) {
    errors.quantity = ERROR_MESSAGES.INVALID_QUANTITY;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors: Object.keys(errors).length > 0 ? errors : null,
  };
};

module.exports = {
  validateCartItem,
};
