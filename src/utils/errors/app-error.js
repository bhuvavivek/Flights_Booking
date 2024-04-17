class AppError extends Error {
  constructor(message, statusCode) {
    this.message = message;
    this.statusCode = statusCode;
    this.explanation = message;

    Error.captureStackTrace(this, this.constructor); //here this line is optional for more info details of error
  }
}

module.exports = AppError;
