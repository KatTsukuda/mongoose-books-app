// books.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create Schema and Model for Books
var BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  image: String,
  release_date: String
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
