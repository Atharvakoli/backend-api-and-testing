const express = require("express");
const { dbConnect } = require("./dbconnect");
const { Hotel: hotelModel } = require("./models/hotel.model");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hotels");
});

dbConnect();

const addHotel = async (req, res) => {
  try {
    let hotelDetails = req.body;
    let newHotel = new hotelModel(hotelDetails);
    await newHotel.save();
    res.status(201).json({ message: "Hotel Created successfully." });
  } catch (error) {
    console.log("Error while adding: ", error.message);
  }
};
app.post("/hotels", addHotel);

const getHotels = async (req, res) => {
  try {
    let hotels = await hotelModel.find();
    res.status(200).json({ hotels });
  } catch (error) {
    console.log("Error while getting: ", error.message);
  }
};
app.get("/hotels", getHotels);

const getHotelByName = async (req, res) => {
  try {
    let name = req.params.hotelName;
    let hotels = await hotelModel.findOne({ name });
    res.status(200).json({ hotels });
  } catch (error) {
    console.log("Error while getting: ", error.message);
  }
};
app.get("/hotels/:hotelName", getHotelByName);

const getHotelsByParking = async (isParkingAvailable) => {
  try {
    let hotels = await hotelModel.find({ isParkingAvailable });
    console.log(hotels);
  } catch (error) {
    console.log("Error while getting: ", error.message);
  }
};
app.get();

const getHotelsByRestaurantAvailable = async (isRestaurantAvailable) => {
  try {
    let hotels = await hotelModel.find({ isRestaurantAvailable });
    console.log(hotels);
  } catch (error) {
    console.log("Error while getting: ", error.message);
  }
};

const getHotelsByCategory = async (req, res) => {
  try {
    let category = req.params.hotelCategory;
    let hotels = await hotelModel.find({ category });
    console.log(hotels);
  } catch (error) {
    console.log("Error while getting: ", error.message);
  }
};
app.get("/hotels/category/:hotelCategory", getHotelsByCategory);

const getHotelsByPriceRange = async (priceRange) => {
  try {
    let hotels = await hotelModel.find({ priceRange });
    console.log(hotels);
  } catch (error) {
    console.log("Error while getting: ", error.message);
  }
};

const getHotelsByRating = async (req, res) => {
  try {
    let rating = req.params.hotelRating;
    let hotels = await hotelModel.find({ rating });
    res.status(200).json({ hotels });
  } catch (error) {
    console.log("Error while getting: ", error.message);
  }
};
app.get("hotels/rating/:hotelRating", getHotelsByRating);

const getHotelsByPhoneNumber = async (req, res) => {
  try {
    let phoneNumber = req.params.phoneNumber;
    let hotels = await hotelModel.findOne({ phoneNumber });
    res.status(200).json({ hotels });
  } catch (error) {
    console.log("Error while getting: ", error.message);
  }
};
app.get("/hotels/directory/:phoneNumber", getHotelsByPhoneNumber);

const updateHotelById = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    let updatedHotel = await hotelModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res
      .status(200)
      .json({ message: "Hotel updated successfully.", updatedHotel });
  } catch (error) {
    console.log("Error while updating: ", error.message);
  }
};
app.put("/hotels/:id", updateHotelById);

const updateHotelByName = async (name, data) => {
  try {
    let updatedHotel = await hotelModel.findOneAndUpdate({ name }, data, {
      new: true,
    });
    console.log(updatedHotel);
  } catch (error) {
    console.log("Error while updating: ", error.message);
  }
};

const updateHotelByPhoneNumber = async (phoneNumber, data) => {
  try {
    let updatedHotel = await hotelModel.findOneAndUpdate(
      { phoneNumber },
      data,
      {
        new: true,
      }
    );
    console.log(updatedHotel);
  } catch (error) {
    console.log("Error while updating: ", error.message);
  }
};

const deleteHotelById = async (id) => {
  try {
    let deletedRestaurant = await hotelModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Hotel deleted successfully." });
  } catch (error) {
    console.log("User Profile updating Error: ", error.message);
  }
};
app.delete("/hotels/:hotelId", deleteHotelById);

const deleteHotelByPhoneNumber = async (phoneNumber) => {
  try {
    let deletedRestaurant = await hotelModel.findOneAndDelete({
      phoneNumber,
    });
    console.log(deletedRestaurant);
  } catch (error) {
    console.log("User Profile updating Error: ", error.message);
  }
};

app.listen(3000, () => console.log("Example app listening on port 3000"));
