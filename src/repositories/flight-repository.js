const CrudRepository = require("./crud-repository");
const { Flight, Airport } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    const response = await Flight.findAll({
      where: filter,
      order: sort,
      include: [
        { model: Airport, as: "arrivalAirport" },
        { model: Airport, as: "departureAirport" },
      ],
    });
    return response;
  }
}

module.exports = FlightRepository;
