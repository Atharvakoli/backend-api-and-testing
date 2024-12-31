const express = require("express");
const app = express();

const { initializeDB } = require("./db/db.connect");
const fs = require("fs");
const { Movie: movieModel } = require("./models/movie.models");
initializeDB();

const jsonData = fs.readFileSync("movies.json", "utf-8");
const moviesData = JSON.parse(jsonData);

app.use(express.json());

function seedData() {
  try {
    for (const movieData of moviesData) {
      const newMovie = new movieModel({
        title: movieData.title,
        releaseYear: movieData.releaseYear,
        genre: movieData.genre,
        director: movieData.director,
        actors: movieData.actors,
        language: movieData.language,
        country: movieData.country,
        rating: movieData.rating,
        plot: movieData.plot,
        awards: movieData.awards,
        posterUrl: movieData.posterUrl,
        trailerUrl: movieData.trailerUrl,
      });
      newMovie.save();
    }
  } catch (error) {
    console.log("Error while seeding DB", error.message);
  }
}

// seedData();

const newMovie = {
  title: "The legend of Hanuman",
  releaseYear: 2024,
  genre: ["Others"],
  director: "Atharva koli",
  actors: ["Shree Ram", "Shree Sita Mata"],
  language: "Marathi",
  country: "India",
  rating: 9.1,
  plot: "A man embarks on a journey to rescue his Wife from asuras",
  awards: "National Film Award",
  posterUrl: "https://example.com/poster2.jpg",
  trailerUrl: "https://example.com/trailer2.mp4",
};

const createMovie = async (newMovie) => {
  try {
    const movie = new movieModel(newMovie);
    const saveMovie = await movie.save();
    console.log(saveMovie);
    return movie;
  } catch (error) {
    throw error;
  }
};

// createMovie(newMovie);
app.post("/movies", async (req, res) => {
  try {
    const savedMovie = await createMovie(req.body);
    console.log(savedMovie);
    res
      .status(201)
      .json({ message: "Movie Added successfully :)", savedMovie });
  } catch (error) {
    res.status(500).json({ error: `Failed to Added movie ${error.message}` });
  }
});

async function readAllMovies() {
  try {
    const allMovies = await movieModel.find();
    return allMovies;
  } catch (error) {
    console.log("Movies NOT FOUND", error);
  }
}

app.get("/movies", async (req, res) => {
  try {
    let movies = await readAllMovies();
    res.status(200).json({ movies });
  } catch (error) {
    res.status(500).json({ error: `Failed to GET movies ${error.message}` });
  }
});

async function getMovieByDirectorName(directorName) {
  try {
    const movieByDirector = await movieModel.find({ director: directorName });
    return movieByDirector;
  } catch (error) {
    console.log("Movie NOT FOUND", error);
  }
}

// getMovieByDirectorName("Atharva koli");
app.get("/movies/:director", async (req, res) => {
  try {
    let movies = await getMovieByDirectorName(req.params.director);
    res.status(200).json({ movies });
  } catch (error) {
    res.status(500).json({ error: `Failed to GET movies ${error.message}` });
  }
});

async function findAMovieByIdAndUpdateRating(id, data) {
  try {
    const updatedMovie = await movieModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedMovie;
  } catch (error) {
    console.log("Movie NOT FOUND", error);
  }
}
// findAMovieByIdAndUpdateRating("67503cbad8bb2b9a7fb38868", { rating: 9.9 });
app.get("/movies/:id", async (req, res) => {
  try {
    let movies = await findAMovieByIdAndUpdateRating(req.params.id, req.body);
    res.status(200).json({ message: "Movie Updated successfully", movies });
  } catch (error) {
    res.status(500).json({ error: `Failed to GET movies ${error.message}` });
  }
});

async function findByTitleAndUpdateValues(title, data) {
  try {
    const updatedMovie = await movieModel.findOneAndUpdate({ title }, data, {
      new: true,
    });
    return updatedMovie;
  } catch (error) {
    console.log("Movie NOT FOUND", error);
  }
}

// findByTitleAndUpdateValues("The legend of Hanuman", { releaseYear: 2023 });
app.get("/movies/:title", async (req, res) => {
  try {
    let movies = await findByTitleAndUpdateValues(req.params.title, req.body);
    res.status(200).json({ message: "Movie Updated successfully", movies });
  } catch (error) {
    res.status(500).json({ error: `Failed to GET movies ${error.message}` });
  }
});

async function deleteMovieById(id) {
  try {
    const deleteMovie = await movieModel.findByIdAndDelete(id);
  } catch (error) {
    console.log("Movie NOT FOUND", error);
  }
}
// deleteMovieById("675040985f070ee4ddf5b9d1");
app.get("/movies/:id", async (req, res) => {
  try {
    let movies = await deleteMovieById(req.params.id);
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: `Failed to GET movies ${error.message}` });
  }
});

async function deleteMovieByTitle(title) {
  try {
    const deleteMovieByTitle = await movieModel.findOneAndDelete({ title });
    console.log(deleteMovieByTitle);
  } catch (error) {
    console.log("Movie NOT FOUND", error);
  }
}
// deleteMovieByTitle("Kabhi Khushi Kabhie Gham");

app.listen(3000, () => {
  console.log("Example App listening on http://localhost:3000");
});
