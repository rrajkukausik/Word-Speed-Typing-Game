const express = require("express");
const cors = require("cors");
const api = require("../routes/index.route");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/api", api);
};
