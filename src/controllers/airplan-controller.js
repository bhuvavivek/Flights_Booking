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

/**
 * GET : /airplanes
 * req-body {}
 */

async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplanService.getAirplans();

    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.errors = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * GET : /airplanes/:id
 * req-body {}
 */

async function getAirplane(req, res) {
  try {
    const airplane = await AirplanService.getAirplane(req.params.id);
    SuccessResponse.errors = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.errors = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * DELETE : /airplanes/:id
 * req-body {}
 */

async function destroyAirplane(req, res) {
  try {
    const airplane = await AirplanService.destroyAirplane(req.params.id);
    SuccessResponse.errors = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.errors = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
module.exports = { createAirplan, getAirplanes, getAirplane, destroyAirplane };
