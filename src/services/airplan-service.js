const { AirplanRepository } = require("../repositories");

const airplanRepository = new AirplanRepository();

async function createAirplan(data) {
  try {
    const airplan = await airplanRepository.create(data);
    return airplan;
  } catch (error) {
    throw error;
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
