const { Schema, model } = requires("mongoose");

const productCardSchema = new Schema({
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
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  offer: {
    type: String,
    required: true,
  },
  delivery: {
    type: String,
    required: true,
  },
  priceAdvertise: {
    type: String,
    required: true,
  },
  inStock: {
    type: String,
    required: true,
  },
});

const ProductCard = model("ProductCard", productCardSchema);

module.exports = { ProductCard };
