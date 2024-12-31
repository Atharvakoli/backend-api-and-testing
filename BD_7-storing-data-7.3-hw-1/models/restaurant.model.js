const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cuisine: [
      {
        type: String,
        required: true,
        enum: [
          "American",
          "Italian",
          "Chinese",
          "Indian",
          "Japanese",
          "Mexican",
          "Thai",
          "French",
          "Mediterranean",
          "Greek",
          "Spanish",
          "Other",
        ],
      },
    ],
    location: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    openHours: {
      type: String,
      required: true,
    },
    priceRange: {
      type: String,
      required: true,
      enum: ["$ (0-10)", "$$ (11-30)", "$$$ (31-60)", "$$$$ (61+)", "Other"],
    },
    reservationsNeeded: {
      type: Boolean,
      default: false,
    },
    isDeliveryAvailable: {
      type: Boolean,
      default: false,
    },
    menuUrl: {
      type: String,
      required: true,
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

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = { Restaurant };
