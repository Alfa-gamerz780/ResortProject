import express from 'express';
import {addReview , dropReview, getReview} from '../Controllers/review.controller.js';

const router = express.Router();


// add review api
router.post('/add', addReview);

router.get("/all", getReview);

router.delete("/remove/:id", dropReview);

export default router;