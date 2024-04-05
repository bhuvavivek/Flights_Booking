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

async function getAirplan(data) {
  try {
    const airplan = await airplanRepository.get(data);
    return airplan;
  } catch (error) {
    throw error;
  }
}

async function getAllAirplan() {
  try {
    const airplan = await airplanRepository.getAll();
    return airplan;
  } catch (error) {
    throw error;
  }
}

async function updateAirplan(data, id) {
  try {
    const updateAirplan = await airplanRepository.update(data, id);
    return updateAirplan;
  } catch (error) {
    throw error;
  }
}

async function destroyAirplan(id) {
  try {
    const destroyAirplan = await airplanRepository.destroy(id);
    return destroyAirplan;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createAirplan,
  getAirplan,
  getAllAirplan,
  updateAirplan,
  destroyAirplan,
};
