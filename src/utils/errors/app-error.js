class AppError extends Error {
  constructor(message, statusCode) {
    this.message = message;
    this.statusCode = statusCode;
    this.explanation = message;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
