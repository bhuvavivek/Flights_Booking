const { StatusCodes } = require("http-status-codes");
const { AirplanRepository } = require("../repositories");

const airplanRepository = new AirplanRepository();
const AppError = require("../utils/errors/app-error");

async function createAirplan(data) {
  try {
    const airplan = await airplanRepository.create(data);
    return airplan;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new Airplane Object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplans() {
  try {
    const airplan = await airplanRepository.getAll();
    return airplan;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplanRepository.get(id);
    return airplane;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The Airplane you requested is not present",
        error.StatusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of  airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirplane(id) {
  try {
    const destroyAirplan = await airplanRepository.destroy(id);
    return destroyAirplan;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The Airplane you requested to delete is not present",
        error.StatusCode
      );
    }
    throw new AppError(
      "Cannot data data of  airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateAirplane(data, id) {
  try {
    const updateAirplane = await airplanRepository.update(data, id);
    return updateAirplane;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The Airplane you requested to update is not present",
        error.StatusCode
      );
    }

    if (error.name === "SequelizeValidationError") {
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
  createAirplan,
  getAirplans,
  getAirplane,
  destroyAirplane,
  updateAirplane,
};
