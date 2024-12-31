const { initializeDB } = require("./db.connect");
const { Post } = require("./models/post.model");
const { User } = require("./models/user.model");

initializeDB();

async function createUser(userDetails) {
  try {
    const newUser = new User(userDetails);
    const user = await newUser.save();
    console.log(user);
  } catch (error) {
    console.error("Error while creating", error.message);
  }
}

// createUser({
//   name: "John koli",
//   email: "john_koli@example.com",
// });

const postData = {
  title: "Greating",
  content: "Having a good day",
  author: "675056eebae2729b121db83d",
};

const addPost = async (postData) => {
  try {
    const newPost = new Post(postData);
    await newPost.save();
    console.log("Post added successfully :) ");
  } catch (error) {
    console.error("Error while creating Post", error.message);
  }
};

// addPost(postData);

const getAllPost = async () => {
  try {
    const allPosts = await Post.find().populate("author");
    console.log(allPosts);
  } catch (error) {
    console.error("Error: ", error);
  }
};

getAllPost();
