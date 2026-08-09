// const app = require('./src/app');
// const cors = require("cors");
// const connectDB = require('./config/db')
import app from './src/app.js';
import connectDB from './config/db.js'

// connect the db
connectDB();


app.listen(3000, () =>{
    console.log("server is running on port 3000 here ");
})