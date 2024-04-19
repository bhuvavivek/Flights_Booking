function buildCustomFilter(query) {
  let customFilter = {};
  const endingTriptime = "23:59:59";
  //trips=Mum-DEl
  if (query.trips) {
    [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;

    if (departureAirportId === arrivalAirportId) {
      throw new AppError(
        "Departure and Arrival airport cannot be the same",
        StatusCodes.BAD_REQUEST
      );
    }
  }

  if (query.price) {
    [minPrice, maxPrice] = query.price.split("-");
    customFilter.price = {
      [Op.between]: [minPrice, maxPrice === undefined ? 20000 : maxPrice],
    };
  }

  if (query.travellers) {
    customFilter.totalSeats = {
      [Op.gte]: query.travellers,
    };
  }

  if (query.tripDate) {
    customFilter.departureTime = {
      [Op.between]: [query.tripDate, query.tripDate + endingTriptime],
    };
  }

  return customFilter;
}

function buildSortFilter(query) {
  let sortFilter = [];

  if (query.sort) {
    const params = query.sort.split(",");
    const sortFilters = params.map((param) => param.split("_"));
    sortFilter = sortFilters;
  }

  return sortFilter;
}

module.exports = {
  buildCustomFilter,
  buildSortFilter,
};
