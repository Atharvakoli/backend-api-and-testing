const fs = require("fs");
const { dbConnect } = require("./dbConnect");
const { Book: bookModel } = require("./models/book.model");

dbConnect();

const jsonData = fs.readFileSync("books.json", "utf-8");

const books = JSON.parse(jsonData);

const seedDb = async () => {
  try {
    for (const book of books) {
      const newBook = new bookModel({
        title: book.title,
        author: book.author,
        publishedYear: book.publishedYear,
        genre: book.genre,
        language: book.language,
        country: book.country,
        rating: book.rating,
        summary: book.summary,
        coverImageUrl: book.coverImageUrl,
      });
      await newBook.save();
    }
  } catch (error) {
    console.log("Book Creating Error: ", error.message);
  }
};

seedDb();
