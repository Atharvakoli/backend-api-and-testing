const mongoose = require("mongoose");
require("dotenv").config();
const mongoDb = process.env.MONGODB_ATLAS;

const dbConnect = async () => {
  await mongoose
    .connect(mongoDb)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Database connection Error: ", error));
};

module.exports = { dbConnect };
