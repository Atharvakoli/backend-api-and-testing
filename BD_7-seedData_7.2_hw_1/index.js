const fs = require("fs");
const { dbConnect } = require("./dbconnect");
const { UserProfile: userProfileModel } = require("./models/profileData.model");

dbConnect();

const jsonData = fs.readFileSync("userProfileData.json", "utf-8");

const userProfileData = JSON.parse(jsonData);

const seedData = async () => {
  try {
    for (const user of userProfileData) {
      let userProfile = new userProfileModel({
        fullName: user.fullName,
        username: user.username,
        bio: user.bio,
        profilePicUrl: user.profilePicUrl,
        followingCount: user.followingCount,
        followerCount: user.followerCount,
        companyName: user.companyName,
        location: user.location,
        portfolioUrl: user.portfolioUrl,
      });
      await userProfile.save();
    }
  } catch (error) {
    console.log("User Profile Creating Error: ", error);
  }
};

seedData();
