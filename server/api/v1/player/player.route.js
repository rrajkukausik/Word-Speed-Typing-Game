const express = require("express");
const playerController = require("./player.controller");

const router = express.Router();

router.get("/all", playerController.getAllPlayers);
router.get("/", playerController.getTopPlayers);
router.post("/", playerController.saveScore);
router.put("/:id", playerController.updateScore);
module.exports = router;
