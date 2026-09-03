import express from 'express';
import { addQuarry, deleteQuarry, getQuarry } from '../Controllers/quarry.controller.js';

const quarryRouter = express.Router();

quarryRouter.post('/add', addQuarry);

quarryRouter.get('/get', getQuarry);

quarryRouter.delete('/delete/:id', deleteQuarry);

export default quarryRouter;