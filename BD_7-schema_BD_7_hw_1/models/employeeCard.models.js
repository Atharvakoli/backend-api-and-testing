const mongoose = require("mongoose");

const employeeCardSchema = new mongoose.Schema({
  profileImageUrl: {
    type: String,
    required: true,
    unique: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  employeeRole: {
    type: String,
    required: true,
  },
  id_no: {
    type: Number,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  telephoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const EmployeeCard = mongoose.model("EmployeeCard", employeeCardSchema);
