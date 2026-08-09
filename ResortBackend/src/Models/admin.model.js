// const mongoose = require('mongoose');
import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    empID:{
        type: String,
        required: true,
        unique : true,
    },
    password:{
        type: String,
        required: true,
    },

});

const Login = mongoose.model('Login', loginSchema);

export default Login