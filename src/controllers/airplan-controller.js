const { AirplanService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

/**
 *
 * Post : /airplanes
 * req-body {modelNumber: 'airbus210' , capacity:200}
 */
async function createAirplan(req, res) {
  try {
    const airplan = await AirplanService.createAirplan({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplan;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.errors = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = { createAirplan };
