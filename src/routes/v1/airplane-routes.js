const express = require("express");
const { AirplanController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");
const router = express.Router();

//  /api/v1/airplanes POST
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  AirplanController.createAirplan
);

// /api/v1/airplanes GET
router.get("/", AirplanController.getAirplanes);

// /api/v1/airplanes/:id GET
router.get("/:id", AirplanController.getAirplane);

// /api/v1/airplanes/:id DELETE
router.delete("/:id", AirplanController.destroyAirplane);

module.exports = router;
