const express = require("express");

const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const { where } = require("sequelize");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Sucessfully started the server on ${ServerConfig.PORT}`);
});

// this is some power of ORM
// const { Airport, City } = require("./models");

// const city = await City.findByPk(1);

// const Airport = await Airport.create({
// name: "kempegowda airport",
// code: "BLR",
// })

// const response = await city.createAirport({
//   name: "kempegowda airport",
//   code: "BLR",
// });

// await City.destroy({
//   where: {
//     id: 1,
//   },
// });
// console.log(response);
