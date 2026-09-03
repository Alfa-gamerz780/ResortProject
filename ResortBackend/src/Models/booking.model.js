import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },

    paymentAmount: {
        type: Number,
        required: true,
    },

    noOfRoom: {
        type: Number,
    }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
