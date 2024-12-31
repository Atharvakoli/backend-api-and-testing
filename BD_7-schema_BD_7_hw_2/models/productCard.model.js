const { Schema, model } = require("mongoose");

const productCardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    ratings: {
      type: Number,
      required: true,
    },
    reviews: {
      type: Number,
      required: true,
    },
    realPrice: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      required: true,
    },
    off: {
      type: String,
      required: true,
    },
    offers: [
      {
        type: String,
      },
    ],
    warrantyDescription: {
      type: String,
      required: true,
    },
    variant: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const ProductCard = model("ProductCard", productCardSchema);

module.exports = { ProductCard };
