const { FlightRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    const flight = flightRepository.create(data);
    return flight;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new flight Object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createFlight,
};
