import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
    },

    paymentAmount:{
        type: Number,
        required: true,
    },

    noOFRoom:{
        type: Number,
    }
},{timestamps: true})