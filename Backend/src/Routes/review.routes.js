const express = require('express');
const {addReview} = require('../Controllers/review.controller') 
const router = express.Router();


// add review api
router.post('/add', addReview);



module.exports = router;