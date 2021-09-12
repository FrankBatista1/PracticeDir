const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// configure env variables
require("dotenv").config(); // library that permits to encode our url and port

// db connection
mongoose
  .connect(process.env.DB_URL) //using mongoose to connect to the library
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("ERROR: Could not connect to DB..."));

// middlewares (app.use)
app.use(express.urlencoded({ extended: true })); //recognize the incoming object as string or array(false) or any type (true)
app.use(express.json()); //translates the post and put to json
app.use(morgan("dev")); // logs the GET 200 ...
app.use(cors()); //to only giva access to certain http to a certain users

// routes in middleware
app.use("/api/books", require("./routes/book.js")); //everithing in book.js is gonna be displayed in /api/books

// listen to port connection
const port = process.env.PORT || 8000; //encoded port
app.listen(port, () => {
  console.log("Server running...");
});
