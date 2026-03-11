const { Book } = require("../model/book.model.js");

const handleBookStoreController = async (req, res) => {
  try {
    const body = req.body;

    if (
      !body.BookName ||
      !body.BookTitle ||
      !body.Author ||
      !body.SellingPrice
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const bookAdd = await Book.create(body);
    if(bookAdd){
        return res.status(201).json({message: "Book is added", success: true, Id:bookAdd})
    }

    return res.status(201).json({
      message: "Book added successfully",
      success: true,
      data: bookAdd,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};


const handleBookSListController= async(req,res)=>{
  try {
    const bookList = await Book.find({});
    return res.status(201).json({Message: "All book fetched Successfully", Success: true,  TotalCount: bookList.length, BookList: bookList});
  } catch (error) {
      return res.status(400).json({Message: error.message, Success: false});

  }
}
module.exports = { handleBookStoreController, handleBookSListController };
