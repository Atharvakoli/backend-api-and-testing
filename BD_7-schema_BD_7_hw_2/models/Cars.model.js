const { Schema, model } = require("mongoose");

const carsSchema = new Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: Number,
    mileage: Number,
    fuelType: {
      type: String,
      enum: ["Gasoline", "Diesel", "Electric", "Hybrid"],
    },
    transmission: { type: String, enum: ["Automatic", "Manual"] },
    bodyStyle: String,
    color: String,
    isCertifiedPreOwned: {
      type: Boolean,
      default: false,
    },
    isFourWheelDrive: {
      type: Boolean,
      default: false,
    },
    isLuxury: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      deafault: true,
    },
  },
  { timestamps: true }
);

const Cars = model("Cars", carsSchema);
module.exports = { Cars };
