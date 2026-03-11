const express = require('express');
const { handleBookStoreController, handleBookSListController } = require('../controllers/book.controller.js');

const router = express.Router();

router.post('/addbook', handleBookStoreController);
router.get('/booklists', handleBookSListController);


module.exports = router;