const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.MONGODB_ATLAS;
function connectDb() {
  mongoose
    .connect(mongoUrl)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Database connection Error: ", error));
}

module.exports = { connectDb };
