import express from 'express';
import { addQuarry } from '../Controllers/quarry.controller.js';

const quarryRouter = express.Router();

quarryRouter.post('/add', addQuarry);


export default quarryRouter;