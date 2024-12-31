const { Schema, model } = require("mongoose");

const departmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Department = model("Department", departmentSchema);

module.exports = { Department };
