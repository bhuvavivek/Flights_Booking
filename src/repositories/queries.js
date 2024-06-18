function addRowLockOnFlights(flightId) {
    return `Select * from Flights WHERE Flight.id = ${flightId} FOR UPDATE;`
}

module.exports = {
    addRowLockOnFlights
}