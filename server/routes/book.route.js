const express = require('express');
const { handleBookStoreController } = require('../controllers/book.controller.js');

const router = express.Router();

router.post('/addbook', handleBookStoreController);

module.exports = router;