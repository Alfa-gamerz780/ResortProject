import express from 'express';
import {addAdmin, loginAdmin, logoutAdmin} from '../Controllers/admin.controller.js';


const router = express.Router();

// Routes
router.post('/add', addAdmin);

router.post('/auth', loginAdmin);

router.post('/logout', logoutAdmin)

export default router