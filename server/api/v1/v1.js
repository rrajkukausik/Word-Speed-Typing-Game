const express = require("express");

const router = express.Router();
const playerRoutes = require("./player/player.route");

router.use("/player", playerRoutes);


module.exports = router;