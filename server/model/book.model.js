const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    BookName:{
      type: String,
      required: true
    },
    BookTitle:{
      type: String,
      required: true
    },
    Author:{
      type: String,
      required: true
    },
    SellingPrice:{
      type: String,
      required: true
    },
    PublisDate:{
      type: String,
      
    }
}, {timestamps: true})

const Book = mongoose.model("book", bookSchema)

module.exports = {Book}



