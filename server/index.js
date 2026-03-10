const express = require('express');
const databaseConnection = require('./databse');
const bookRouter = require('./routes/book.route');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use('/book', bookRouter);

// connect database
databaseConnection();

app.listen(3080, () => {
    console.log("Server is listening on port 3080");
});