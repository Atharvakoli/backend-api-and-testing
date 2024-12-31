const mongoose = require("mongoose");

const twitterProfileSchema = new mongoose.Schema({
  profilePick: String,
  fullName: String,
  username: String,
  bio: String,
  companyName: String,
  city: String,
  portfolioLink: String,
  handle: String,
  followersCount: Number,
  followingCount: Number,
  isOnline: Boolean,
});

const TwitterProfile = mongoose.model("TwitterProfile", twitterProfileSchema);

module.exports = { TwitterProfile };
