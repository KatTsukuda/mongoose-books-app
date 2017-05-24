// index.js
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

// export Book
module.exports.Book = require('.book.js')
