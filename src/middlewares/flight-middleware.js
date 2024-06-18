const AppError = require("../utils/errors/app-error");
const { ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");
const { compareTime } = require("../utils/helpers/datetime-helpers");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["flgihtNumber not found in the incomming in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.flightNumber) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["flgihtNumber not found in the incomming in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.airplaneId) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["airplaneId not found in the incomming in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.departureAirportId) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["departureAirportId not found in the incomming in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["arrivalAirportId not found in the incomming in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.arrivalTime) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["arrivalTime not found in the incomming in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.departureTime) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["departureTime not found in the incomming in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.price) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["price not found in the incomming in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.totalSeats) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["totalSeats not found in the incomming in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!compareTime(req.body.arrivalTime, req.body.departureTime)) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["arrivalTime should be greater than departureTime"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}


function validateUpdateSeatRequest(req, res, next) {
  if (!req.body.seats) {
    ErrorResponse.message = 'Something went wrong while updating flight';
    ErrorResponse.error = new AppError(['seats not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}
module.exports = {
  validateCreateRequest,
  validateUpdateSeatRequest
};
