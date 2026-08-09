// const mongoose = require('mongoose');
import mongoose from "mongoose";

const connectDB = () =>{

    mongoose.connect('mongodb://localhost:27017/resortDB')
    console.log("Database connected")
}


export default connectDB;