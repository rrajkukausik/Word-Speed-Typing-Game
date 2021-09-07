const express = require("express");

const router = express.Router();
const routes_v1 = require("./v1/v1");

router.get("/", (req, res) => {
  res.json({
    message: "API Running.",
  });
});

router.use("/v1", routes_v1);

module.exports = router;
