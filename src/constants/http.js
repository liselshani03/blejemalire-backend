const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

const ERROR_MESSAGES = {
  // Auth errors
  INVALID_EMAIL: "Invalid email format",
  INVALID_PASSWORD: "Password must be at least 8 characters",
  EMAIL_ALREADY_EXISTS: "User with this email already exists",
  USER_NOT_FOUND: "User not found",
  INVALID_CREDENTIALS: "Invalid email or password",
  UNAUTHORIZED: "Unauthorized access",
  TOKEN_EXPIRED: "Token has expired",
  INVALID_TOKEN: "Invalid token",

  // Product errors
  PRODUCT_NOT_FOUND: "Product not found",
  PRODUCTS_NOT_FOUND: "No products found",

  // Cart errors
  INVALID_PRODUCT_ID: "Invalid product ID",
  INVALID_QUANTITY: "Quantity must be greater than 0",
  PRODUCT_ALREADY_IN_CART: "Product already in cart",
  CART_ITEM_NOT_FOUND: "Item not found in cart",

  // Server errors
  SERVER_ERROR: "Internal server error",
  DATABASE_ERROR: "Database operation failed",
};

const SUCCESS_MESSAGES = {
  SIGNUP_SUCCESSFUL: "Sign up successful",
  LOGIN_SUCCESSFUL: "Login successful",
  PRODUCT_FETCHED: "Products fetched successfully",
  PRODUCT_ADDED_TO_CART: "Product added to cart",
  CART_ITEM_DELETED: "Item removed from cart",
  CART_FETCHED: "Cart fetched successfully",
};

module.exports = {
  HTTP_STATUS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
};
