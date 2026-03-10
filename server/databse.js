const mongoose = require('mongoose');

const databaseConnection = async () => {

    await mongoose.connect("mongodb://localhost:27017/bookStore")
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("Database connection failed", err);
    });

}

module.exports = databaseConnection;