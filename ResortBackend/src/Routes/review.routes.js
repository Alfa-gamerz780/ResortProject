// const express = require('express');
// const {addReview} = require('../Controllers/review.controller') 
import express from 'express';
import {addReview} from '../Controllers/review.controller.js';
const router = express.Router();


// add review api
router.post('/add', addReview);



export default router;