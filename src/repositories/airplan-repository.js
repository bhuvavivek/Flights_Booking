const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");
class AirplanRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}

module.exports = AirplanRepository;
