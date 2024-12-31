const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected successfully."))
    .catch((error) => console.log(`Database connection ERROR: ${error}`));
};
module.exports = dbConnect;
