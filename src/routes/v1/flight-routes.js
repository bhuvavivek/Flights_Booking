const express = require("express");
const { FlightController } = require("../../controllers");

const router = express.Router();

// /api/v1/flights POST
router.post("/", FlightController.createFlight);

module.exports = router;
