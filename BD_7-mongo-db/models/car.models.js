const mongoose = require("mongoose"); // help us query from the db, provide some method to create data models

const carSchema = new mongoose.Schema({
  model: String,
  releaseYear: Number,
  make: String,
});

const Car = mongoose.model("Car", carSchema);

module.exports = { Car };
