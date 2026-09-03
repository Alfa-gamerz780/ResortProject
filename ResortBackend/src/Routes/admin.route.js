import express from 'express';
import {addAdmin, checkAuth, getAdmin, loginAdmin, logoutAdmin} from '../Controllers/admin.controller.js';


const router = express.Router();

// Routes
router.post('/add', addAdmin);

router.post('/auth', loginAdmin);

router.post('/logout', logoutAdmin);

router.get('/staff/:id', getAdmin);

router.get('/verify', checkAuth);

export default router;
