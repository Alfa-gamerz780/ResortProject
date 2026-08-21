import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    roomName:{
        type: String,
        required: true,
    },
    noOfBed:{
        type: Number,
        required: true,
    },
    nameOfBed:{
        type: String,
        required: true,
    },
    noOfGuest:{
        type: Number,
        required: true,
    },
    roomArea:{
        type: Number,
        required: true,
    },
    roomDescription:{
        type: String,
        required: true,
    },
    roomPrice:{
        type: Number,
        required: true,
    },
    roomImage:{
        type: String,
        required: true,
    },
    imagePublicId: {
        type: String,
    },
});

const Room = mongoose.model("Room", roomSchema);

export default Room;