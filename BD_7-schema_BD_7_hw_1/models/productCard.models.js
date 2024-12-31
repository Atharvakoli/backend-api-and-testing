const mongoose = require("mongoose");

const productCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  typeOfShoes: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  productInfo: {
    type: String,
    required: true,
  },
  colors: [
    {
      type: String,
      required: true,
      enum: ["blue", "orange", "green", "red", "black"],
    },
  ],
  size: [
    {
      type: Number,
      required: true,
      enum: [7, 8, 9, 10, 11],
    },
  ],
  price: {
    type: Number,
    required: true,
  },
});

const ProductCard = mongoose.model("ProductCard", productCardSchema);

module.exports = { ProductCard };
