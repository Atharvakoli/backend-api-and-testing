const { Schema, model } = require("mongoose");

const userProfileSchema = new Schema(
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
    birthdate: Date,
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePictureUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserProfile = model("UserProfile", userProfileSchema);
module.exports = { UserProfile };
