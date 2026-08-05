const mongoose = require('mongoose');

const connectDB = () =>{

    mongoose.connect('mongodb://localhost:27017/resortDB')
    console.log("Database connected")
}


module.exports = connectDB;