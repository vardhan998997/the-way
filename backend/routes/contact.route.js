import { Router } from 'express';
import { createContactUs } from '../controllers/contactus.controller.js';
const router = Router();
router.route('/').post(createContactUs);
export default router;
