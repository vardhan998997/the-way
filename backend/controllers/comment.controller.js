import CommentModel from '../models/comment.model.js';
import asyncHandler from '../utils/asyncHandler.js';
import { CustomError } from '../utils/CustomError.js';
const createComment = asyncHandler(async (req, res, next) => {
	const { userId, comment } = req.body;
	if (!comment) {
		throw new Error('Please Enter Comment');
	}
	const newComment = await CommentModel.create({ userId, comment });
	res.status(201).json(newComment);
});
const deleteComment = asyncHandler(async (req, res, next) => {
	const { commentId } = req.params;
	const comment = await CommentModel.findById(commentId);
	if (!comment) {
		throw new CustomError('Comment Not Found', 404);
	}
	const commentDeleted = await CommentModel.findByIdAndDelete(commentId);
	res.status(200).json({ message: 'Comment Deleted' });
});
// const getAllComments = asyncHandler(async (req, res, next) => {
// 	const comments = await CommentModel.find();
// 	if (comments.length === 0) {
// 		return res.status(200).json({ message: 'No Comments', data: [] });
// 	}
// 	res.status(200).json(comments);
// });
const getAllComments = async (req, res) => {
	try {
		const comments = await CommentModel.find();
		if (comments.length === 0) {
			return res.status(200).json({ message: 'No Comments', data: [] });
		}
		res.status(200).json(comments);
	} catch (error) {
		res.status(400).json(error);
	}
};
export { createComment, getAllComments, deleteComment };
