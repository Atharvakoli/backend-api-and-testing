const { Schema, model } = require("mongoose");

const recipeSchema = new Schema(
  {
    servings: {
      type: Number,
      required: true,
    },
    preppingTime: {
      type: Number,
      required: true,
    },
    cookingTime: {
      type: Number,
      required: true,
    },
    ingredients: [
      {
        type: String,
      },
    ],
    directions: [
      {
        type: String,
      },
    ],
    notes: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Recipe = model("Recipe", recipeSchema);
module.exports = { Recipe };
