// const express = require('express');
// const cors = require("cors");
// const reviewRouter = require('./Routes/review.routes')
// const adminRouter = require('./Routes/admin.route')
import express from 'express';
import cors from 'cors';
import reviewRouter from './Routes/review.routes.js'
import adminRouter from './Routes/admin.route.js'

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));


app.use(express.json());

// review router
app.use('/api/user', reviewRouter);

// admin add
app.use('/api/admin', adminRouter);



export default app