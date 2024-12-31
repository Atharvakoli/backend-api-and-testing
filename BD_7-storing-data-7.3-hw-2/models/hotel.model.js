const { Schema, model } = require("mongoose");

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Budget", "Mid-Range", "Luxury", "Boutique", "Resort", "Other"],
    },
    location: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    website: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    checkInTime: {
      type: String,
      required: true,
    },
    checkOutTime: {
      type: String,
      required: true,
    },
    amenities: [
      {
        type: String,
        required: true,
      },
    ],
    priceRange: [
      {
        type: String,
        required: true,
        enum: ["$$ (11-30)", "$$$ (31-60)", "$$$$ (61+)", "Other"],
      },
    ],
    reservationsNeeded: {
      type: Boolean,
      default: false,
    },
    isParkingAvailable: {
      type: Boolean,
      default: false,
    },
    isSpaAvailable: {
      type: Boolean,
      default: false,
    },
    isRestaurantAvailable: {
      type: Boolean,
      default: false,
    },
    photos: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Hotel = model("Hotel", hotelSchema);

module.exports = { Hotel };
