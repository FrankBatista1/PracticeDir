const { Schema, model } = require("mongoose");

const BookSchema = Schema({//Schema used to post and update the objects
  title: { 
    unique: [true, "Names should be unique"],//key used to ensure that is unique when passed
    type: String, 
    required: [true, "Title is required"] //key used to ensure that is there when passed
  },
  author: {
    type: String,
    required: [true, 'Author is required']
  },
  pages: {
    type: Number,
    required: [true, "The Pages number is required"]
  },
  genre: {
    type: [],
    required: [true, "It should have at least one genre"]
  },
});

module.exports = model("Book", BookSchema);