const express = require("express");
const app = express();
const { dbConnect } = require("./dbConnect");
const { Restaurant: restaurantModel } = require("./models/restaurant.model");

app.use(express.json());

dbConnect();

const addRestaurant = async (req, res) => {
  try {
    let restaurantDetails = req.body;
    let newRestaurant = new restaurantModel(restaurantDetails);
    await newRestaurant.save();
    res.status(201).json({ message: "Restaurant created successfully." });
  } catch (error) {
    console.log("Error while adding: ", error.message);
  }
};

app.post("/restaurants", addRestaurant);

const getRestaurants = async (req, res) => {
  try {
    let restaurants = await restaurantModel.find();
    res.status(200).json({ restaurants });
  } catch (error) {
    console.log("Error while getting: ", error.message);
  }
};
app.get("/restaurants", getRestaurants);

const getRestaurantsByName = async (name) => {
  try {
    let name = req.params.name;
    let restaurant = await restaurantModel.findOne({ name });
    res.status(200).json({ restaurant });
  } catch (error) {
    console.log("Error while getting: ", error.message);
  }
};

app.get("/restaurants/:name", getRestaurants);

const getRestaurantsByReservations = async (req, res) => {
  try {
    let reservation = req.params.reservation;
    let restaurants = await restaurantModel.find({
      reservationsNeeded: reservation,
    });
    res.status(200).json({ restaurants });
  } catch (error) {
    console.log("Error while getting: ", error.message);
  }
};
app.get("/restaurants/:reservation", getRestaurantsByReservations);

const getRestaurantsByDelivery = async (req, res) => {
  try {
    let delivery = req.params.delivery;
    let restaurant = await restaurantModel.find({
      isDeliveryAvailable: delivery,
    });
    res.status(200).json({ restaurant });
  } catch (error) {
    console.log("Error while getting: ", error.message);
  }
};
app.get("/restaurants/:delivery", getRestaurants);

const getRestaurantsByPhoneNumber = async (req, res) => {
  try {
    let number = req.body.number;
    let restaurant = await restaurantModel.findOne({
      phoneNumber: number,
    });
    res.status(200).json({ restaurant });
  } catch (error) {
    console.log("Error while getting: ", error.message);
  }
};
app.get("/restaurants", getRestaurantsByPhoneNumber);

const getRestaurantsByCuisine = async (req, res) => {
  try {
    let cuisine = req.params.cuisine;
    let restaurant = await restaurantModel.find({
      cuisine: { $in: cuisine },
    });
    res.status(200).json({ restaurant });
  } catch (error) {
    console.log("Error while getting: ", error.message);
  }
};
app.get("/restaurants/:cuisine", getRestaurantsByCuisine);

const updateRestaurantDataById = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    let updateRestaurant = await restaurantModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json({
      message: "Restaurant updated successfully",
      restaurant: updateRestaurant,
    });
  } catch (error) {
    console.log("Restaurant updating Error: ", error.message);
  }
};
app.put("/restaurants/:id", updateRestaurantDataById);

const updateRestaurantDataByName = async (req, res) => {
  try {
    let name = req.params.name;
    let data = req.body;
    let updateRestaurant = await restaurantModel.findOneAndUpdate(
      { name },
      data,
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "Restaurant updated successfully",
      restaurant: updateRestaurant,
    });
  } catch (error) {
    console.log("Restaurant updating Error: ", error.message);
  }
};

app.put("/restaurant/:name", updateRestaurantDataByName);

const updateRestaurantDataByPhoneNumber = async (req, res) => {
  try {
    let phoneNumber = req.params.phoneNumber;
    let data = req.body;
    let updateRestaurant = await restaurantModel.findOneAndUpdate(
      { phoneNumber },
      data,
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "Restaurant updated successfully",
      restaurant: updateRestaurant,
    });
  } catch (error) {
    console.log("Restaurant updating Error: ", error.message);
  }
};
app.put("/restaurant/:phoneNumber", updateRestaurantDataByPhoneNumber);

const deleteRestaurantById = async (req, res) => {
  try {
    let id = req.params.id;
    let deletedRestaurant = await restaurantModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "Restaurant Deleted successfully",
    });
  } catch (error) {
    console.log("User Profile updating Error: ", error.message);
  }
};

app.delete("/restaurant/:id", deleteRestaurantById);

const deleteRestaurantByName = async (req, res) => {
  try {
    let name = req.params.name;
    let deletedRestaurant = await restaurantModel.findOneAndDelete({ name });
    res.status(200).json({
      message: "Restaurant Deleted successfully",
    });
  } catch (error) {
    console.log("User Profile updating Error: ", error.message);
  }
};
app.delete("/restaurant/:id", deleteRestaurantByName);

app.listen(3000, () => console.log("Example app listening on port 3000"));
