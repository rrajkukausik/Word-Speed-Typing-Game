const mongoose = require("mongoose");

module.exports = function () {
  //const DB_URL=config.get("DB_URL"); // Use this when DB_URL is present in environment
  // const DB_URL="mongodb://interactive-learning-mongo-service:27017/local" // Use this when MongoDB is running in docker
  const DB_URL = "mongodb://localhost:27017/WordRaceDB"; //Use this when MongoDB is running in your local system

  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DataBase...");
    });
};
