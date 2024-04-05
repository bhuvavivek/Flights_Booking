const { StatusCodes } = require("http-status-codes");

function validateCreateRequest(req, res, next) {
  if (!req.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Something went Wrong While creating airplane",
      data: {},
      error: {
        explanation:
          "Model Number not found in incoming request in the correct form",
      },
    });
  }

  next();
}

module.exports = {
  validateCreateRequest,
};