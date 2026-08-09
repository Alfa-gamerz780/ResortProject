// const express = require('express');
// const {addAdmin} = require('../Controllers/admin.controller');
import express from 'express';
import {addAdmin} from '../Controllers/admin.controller.js';
const router = express.Router();



router.post('/add', addAdmin);

export default router