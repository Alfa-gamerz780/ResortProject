import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


import reviewRouter from './Routes/review.routes.js';
import adminRouter from './Routes/admin.route.js';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));


app.use(express.json({limit: "16kb"}));

app.use(express.urlencoded({extended: true, limit: "16kb"}));

app.use(express.static("public"));

app.use(cookieParser());

// review router
app.use('/api/review', reviewRouter);

// admin add
app.use('/api/admin', adminRouter);



export default app