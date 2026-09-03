import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    empName:{
        type: String,
        required: true, 
    },
    empAge:{
        type: Number,
        required: true, 
    },
    empPhoneNo:{
        type: Number,
        required: true, 
    },
    empAadharNo:{
        type: Number,
        required: true, 
    },
    empEmail:{
        type: String,
        required: true,
        unique : true,
    },
    password:{
        type: String,
        required: true,
    },
    empAddress:{
        type: String,
        required: true,
    },
    role: {
       type: String,
       required: true, 
    },

}, {timestamps: true});

const Login = mongoose.model('Login', loginSchema);

export default Login