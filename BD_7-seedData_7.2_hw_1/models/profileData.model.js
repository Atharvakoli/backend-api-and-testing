const { Schema, model } = require("mongoose");

const userProfileSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    profilePicUrl: {
      type: String,
      required: true,
    },
    followingCount: {
      type: Number,
      required: true,
    },
    followerCount: {
      type: Number,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    portfolioUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserProfile = model("UserProfile", userProfileSchema);

module.exports = { UserProfile };
