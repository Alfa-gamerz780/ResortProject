import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


import reviewRouter from './Routes/review.routes.js';
import adminRouter from './Routes/admin.route.js';
import quarryRouter from './Routes/quarry.routes.js'
import roomRouter from './Routes/room.routes.js';

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

// admin router
app.use('/api/admin', adminRouter);

//quarry router
app.use('/api/quarry', quarryRouter);

//room router
app.use('/api/room', roomRouter);


export default app