import { Router } from 'express';
import {
	createComment,
	getAllComments,
	deleteComment,
} from '../controllers/comment.controller.js';
const router = Router();
router.route('/').post(createComment);
router.get('/', getAllComments);
router.route('/:commentId').delete(deleteComment);
export default router;
