import mongoose from "mongoose";

const quarrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phoneNo:{
        type: Number,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
}, {timestamps: true});

const Quarry = mongoose.model('Quarry', quarrySchema);

export default Quarry;