const express = require('express');
const cors = require("cors");
const reviewRouter = require('./Routes/review.routes')
const adminRouter = require('./Routes/admin.route')

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));


app.use(express.json());

// review router
app.use('/api/user', reviewRouter);
app.use('/api/admin', adminRouter);



module.exports = app;