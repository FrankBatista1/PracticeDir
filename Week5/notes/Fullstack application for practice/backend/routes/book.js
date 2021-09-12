//localhost:??/api//books
const express = require("express");
const Book = require("../models/Book");//imports the Schema of Books
const router = express.Router();//Permits routing

//Get
router.get("/", async (req, res) => {
  const books = await Book.find();//model permits interact directly with the database using schemas
  try {
    return res.status(200).json(books);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error: there was somethign wrong with the server" });
  }
});

//Get 1
router.get("/book/:id", async (req, res) => {
  const {id} = req.params;
  const response = await Book.findById(req.params.id); // req.params.id is getting the id from the url
  try {
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({message: "Could not find the book"})
  }
})

//Create 1
router.post("/book", async (req, res) => {
  const bookToCreate = await Book.create({
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    genre: req.body.genre
  });
  try {
    return res.status(201).json(bookToCreate);
  } catch (error) {
    return res.status(500).json({message: "Error: Coudn't create the book", error})
  }
})

module.exports = router;


//Updating 1
//Delete 1