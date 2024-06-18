const { FlightRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");
const { Op } = require("sequelize");
const { FlightQueryHelper } = require("../utils/helpers");

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

async function getAllFlights(query) {
  const customFilter = FlightQueryHelper.buildCustomFilter(query);
  const sortFilter = FlightQueryHelper.buildSortFilter(query);

  try {
    const flights = flightRepository.getAllFlights(customFilter, sortFilter);
    return flights;
  } catch (error) {
    throw new AppError(
      "Cann not fetch data of all flights",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}


async function getFlight(id) {
  try {
    const flight = await flightRepository.get(id);
    return flight;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError('the Flight request is not present', error.statusCode)
    }
    throw new AppError('Cannot fetch data of all the flight', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function updateSeats(data) {
  try {
    const response = await flightRepository.updateRemainingSeats(data.flightId, data.seats, data.dec);
    return response;
  } catch (error) {
    console.log(error)
    throw new AppError('Cannot update data of the flight', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
  updateSeats
};
