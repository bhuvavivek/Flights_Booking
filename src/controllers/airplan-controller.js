const { AirplanService } = require("../services");
const { StatusCodes } = require("http-status-codes");
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
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Sucessfully created an airplan",
      data: airplan,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: true,
      message: "Something went wrong while creating airplane",
      data: {},
      error: error,
    });
  }
}

module.exports = { createAirplan };
