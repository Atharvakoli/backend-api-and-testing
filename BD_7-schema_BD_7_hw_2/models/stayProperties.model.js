const { Schema, model } = require("mongoose");

const stayPropertiesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    location: String,
    pricePerNight: Number,
    capacity: Number,
    isPetFriendly: {
      type: Boolean,
      default: true,
    },
    hasWifi: {
      type: Boolean,
      default: false,
    },
    hasParking: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      defult: true,
    },
  },
  { timestamps: true }
);

const StayProperties = model("StayProperties", stayPropertiesSchema);

module.exports = { StayProperties };
