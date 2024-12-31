const { Schema, model } = require("mongoose");

const playerProfilesSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: String,
    lastName: String,
    age: Number,
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    country: String,
    isActive: {
      type: Boolean,
      default: true,
    },
    gamesPlayed: Number,
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
    },
    preferredGame: Sting,
  },
  { timestamps: true }
);

const PlayerProfile = model("PlayerProfile", playerProfilesSchema);

module.exports = { PlayerProfile };
