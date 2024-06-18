const { CityService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

/**
 *  POST : /cities
 *  req-body {name:'london}
 */

async function createCity(req, res) {
  try {
    const city = await CityService.createCity({ name: req.body.name });
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * DELETE : /cities/:id
 * req-body {}
 */

async function destroyCity(req, res) {
  try {
    const city = await CityService.destroyCity(req.params.id);
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * PATCH : /cities/:id
 * req-body  {
        name: "VARANSI"
      }
 */

async function updateCity(req, res) {
  try {
    const city = await CityService.updateCity(
      {
        name: req.body.name,
      },
      req.params.id
    );
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  destroyCity,
  updateCity,
};
