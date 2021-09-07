const express = require("express");
const cors = require("cors");
const api = require("../api/index");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/api", api);
};
