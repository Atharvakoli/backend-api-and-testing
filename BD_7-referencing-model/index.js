const { connectDb } = require("./dbConnect");
const { Author: authorModel } = require("./models/author.model");
const { Book: bookModel } = require("./models/book.model");
const { Department: departmentModel } = require("./models/department.model");
const { Employee: employeeModel } = require("./models/Employee.model");

connectDb();

const addBook = async (bookDetails) => {
  try {
    let newBook = new bookModel(bookDetails);
    await newBook.save();
    console.log({ message: "Book is created", newBook });
  } catch (error) {
    console.log("Creating Book Error: ", error.message);
  }
};

const addAuthor = async (authorDetails) => {
  try {
    let newAuthor = new authorModel(authorDetails);
    await newAuthor.save();
    console.log({ message: "Author is created", newAuthor });
  } catch (error) {
    console.log("Creating Author Error: ", error.message);
  }
};

const getBooks = async () => {
  try {
    let books = await bookModel.find().populate("author");
    console.log(books);
  } catch (error) {
    console.log("getting Books Error: ", error.message);
  }
};

// addAuthor({
//   name: "Athu koli",
//   email: "athukoli@example.com",
// });
// addBook({
//   title: "kabbadi",
//   genre: "Sports",
//   author: "675581da65ac193c0b963596",
// });
// getBooks();

const addEmployee = async (employeeDetails) => {
  try {
    let newEmployee = new employeeModel(employeeDetails);
    await newEmployee.save();
    console.log({ message: "Employee is created", newEmployee });
  } catch (error) {
    console.log("Creating Employee Error: ", error.message);
  }
};

const addDepartment = async (departmentDetails) => {
  try {
    let newDepartment = new departmentModel(departmentDetails);
    await newDepartment.save();
    console.log({ message: "Department is created", newDepartment });
  } catch (error) {
    console.log("Creating department Error: ", error.message);
  }
};

const getEmployees = async () => {
  try {
    let employees = await employeeModel.find().populate("department");
    console.log(employees);
  } catch (error) {
    console.log("getting Books Error: ", error.message);
  }
};

// addDepartment({
//   name: "IT Department",
//   location: "Mumbai",
// });
// addEmployee({
//   name: "Atharva koli",
//   email: "athu@example.com",
//   department: "675587323d83f3df8935a994",
// });
getEmployees();
