const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

const initializeDB = async () => {
  await mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("connected to Database");
    })
    .catch((error) => {
      console.log("Error Connecting to database", error);
    });
};

module.exports = { initializeDB };
