const express = require("express");

const router = express.Router();
const playerRoutes = require("./player.route");

router.get("/", (req, res) => {
    res.json({
      message: "API Running.",
    });
  });
router.use("/player", playerRoutes);


module.exports = router;