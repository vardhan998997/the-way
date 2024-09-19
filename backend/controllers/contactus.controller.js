import ContactUsModel from '../models/contactus.model.js';
import asyncHandler from '../utils/asyncHandler.js';
import { CustomError } from '../utils/CustomError.js';
const createContactUs = asyncHandler(async (req, res, next) => {
	if (!['name', 'email', 'message'].every((field) => req.body[field]?.trim())) {
		throw new CustomError('All Fields Are Required', 400);
	}
	const contactUs = await ContactUsModel.create(req.body);
	res.status(201).json(contactUs);
});
export { createContactUs };
