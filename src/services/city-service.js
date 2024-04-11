const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const cityRepository = new CityRepository();
const AppError = require("../utils/errors/app-error");

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (
      error.name === "SequelizeValidationError" ||
      error.name === "SequelizeUniqueConstaintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Cannot create a new city object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyCity(id) {
  try {
    const destroyCity = await cityRepository.destroy(id);
    return destroyCity;
  } catch (error) {
    if (error.StatusCodes === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The city you requested to delete is not present",
        error.StatusCode
      );
    }

    throw new AppError(
      "Cannot delete the city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateCity(id, data) {
  try {
    const city = await cityRepository.update(id, data);
    return city;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The city you requested to update is not present",
        error.StatusCode
      );
    }

    if (
      error.name === "SequelizeValidationError" ||
      error.name === "SequelizeUniqueConstaintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw error;
  }
}

module.exports = {
  createCity,
  destroyCity,
  updateCity,
};
