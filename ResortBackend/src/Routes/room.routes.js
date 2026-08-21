import express from 'express';
import { addRoom, deleteRoom, editRoom, getRoom } from '../Controllers/room.controllers.js';
import upload from '../Middlewares/upload.middleware.js';

const roomRouter = express.Router();

roomRouter.post('/add', upload.single("roomImage"), addRoom);

roomRouter.get('/fetch', getRoom);

roomRouter.delete('/delete/:id', deleteRoom);

roomRouter.put('/update/:id', upload.single("roomImage"), editRoom );

export default roomRouter;