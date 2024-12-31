const express = require("express");
const dbConnect = require("./dbConnect");
const { Recipe } = require("./models/recipe.model");
const { trusted } = require("mongoose");
dbConnect();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Recipes");
});

async function addRecipe(req, res) {
  try {
    let newRecipeDetails = req.body;
    let newRecipe = new Recipe(newRecipeDetails);
    await newRecipe.save();
    res.status(201).json({ message: "recipe created successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getRecipes(req, res) {
  try {
    let recipes = await Recipe.find();
    if (!recipes) {
      return res.status(404).json({ message: "Recipes, NOT FOUND" });
    }
    res.status(200).json({ recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getRecipeByTitle(req, res) {
  try {
    let title = req.params.title;
    let recipes = await Recipe.findOne({ title });
    if (!recipes) {
      return res.status(404).json({ message: "Recipe by title, NOT FOUND" });
    }
    res.status(200).json({ recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getRecipeByAuthor(req, res) {
  try {
    let author = req.params.author;
    let recipes = await Recipe.find({ author });
    if (!recipes) {
      return res.status(404).json({ message: "Recipe by Author, NOT FOUND" });
    }
    res.status(200).json({ recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function getRecipeByDifficultyType(req, res) {
  try {
    let difficulty = req.params.difficulty;
    let recipes = await Recipe.find({ difficulty });
    if (!recipes || recipes.length === 0) {
      return res
        .status(404)
        .json({ message: "Recipe by difficulty Type, NOT FOUND" });
    }
    res.status(200).json({ recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateRecipeById(req, res) {
  try {
    let id = req.params.id;
    let { difficulty } = req.body;
    let recipeToUpdate = await Recipe.findByIdAndUpdate(
      id,
      {
        difficulty,
      },
      { new: true }
    );
    if (!recipeToUpdate) {
      return res
        .status(400)
        .json({ message: "something went wrong while updating" });
    }
    res.status(200).json({
      message: "Recipe updated successfully.",
      recipe: recipeToUpdate,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateRecipeByName(req, res) {
  try {
    const { name } = req.params;
    const data = req.body;

    const recipeToUpdate = await Recipe.findOneAndUpdate({ name }, data, {
      new: true,
    });

    if (!recipeToUpdate) {
      return res
        .status(404)
        .json({ message: "Recipe not found or not updated" });
    }

    res.status(200).json({
      message: "Recipe updated successfully.",
      recipe: recipeToUpdate,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteRecipe(req, res) {
  try {
    let id = req.params.id;
    let recipe = await Recipe.findByIdAndDelete(id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json({ message: "Recipe deleted success." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

app.post("/recipes", addRecipe);
app.get("/recipes", getRecipes);
app.get("/recipe/:title", getRecipeByTitle);
app.get("/recipes/:author", getRecipeByAuthor);
app.get("/recipes/difficulty/:difficulty", getRecipeByDifficultyType);
app.put("/recipe/:id", updateRecipeById);
app.put("/recipes/update/:name", updateRecipeByName);
app.delete("/recipes/delete/:id", deleteRecipe);

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
