const { Schema, model } = require("mongoose");

const restuarantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cuisine: [
      {
        type: String,
        enum: [
          "Italian",
          "Mexican",
          "Chinese",
          "Indian",
          "American",
          "French",
          "Japanese",
          "Mediterranean",
          "Thai",
          "Vegetarian",
          "Vegan",
          "Other",
        ],
      },
    ],
    location: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    phone: Number,
    website: String,
    openingYear: Number,
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    specialDishes: [
      {
        type: String,
      },
    ],
    photoUrls: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Restuarant = model("Restuarant", restuarantSchema);

module.exports = { restuarantSchema };
