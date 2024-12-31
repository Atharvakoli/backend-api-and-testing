const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.MONGODB_ATLAS;

const dbConnect = () => {
  mongoose
    .connect(mongoUrl)
    .then(() => console.log("Database connected."))
    .catch((error) =>
      console.log("Database connection Error: ", error.message)
    );
};

module.exports = { dbConnect };
