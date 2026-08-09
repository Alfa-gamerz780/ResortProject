// const mongoose = require('mongoose');
import mongoose from "mongoose";


const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique : true,
    },
    message : {
        type: String,
        required : true,
    }
})

const Review = mongoose.model('Review', reviewSchema);

export default Review;