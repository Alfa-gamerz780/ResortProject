const express = require('express');
const {addAdmin} = require('../Controllers/admin.controller');
const router = express.Router();

router.post('/add', addAdmin);

module.exports = router