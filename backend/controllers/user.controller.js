import asyncHandler from '../utils/asyncHandler.js';
import UserModel from '../models/user.model.js';
import { CustomError } from '../utils/CustomError.js';
import { createToken } from '../utils/generateToken.js';
import bcrypt from 'bcrypt';
const signup = asyncHandler(async (req, res, next) => {
	if (
		!['username', 'password', 'email', 'name'].every((field) =>
			req.body[field]?.trim(),
		)
	) {
		throw new CustomError('All Fields Are Required', 404);
	}
	const { username, password, email, name } = req.body;
	const isEmailExist = await UserModel.findOne({ email });
	if (isEmailExist) {
		throw new CustomError('Email Already Exists', 400);
	}
	const hashedPassword = await bcrypt.hash(password, 10);
	const user = await UserModel.create({
		email,
		username,
		name,
		password: hashedPassword,
	});
	if (!user) {
		throw new CustomError('User Not Created', 400);
	}
	user.password = undefined;
	const token = createToken({ username, _id: user._id });
	res.status(201).json({ user, token });
});
const login = asyncHandler(async (req, res, body) => {
	if (!['email', 'password'].every((field) => req.body[field]?.trim())) {
		throw new CustomError('All Fields Are Required', 404);
	}
	const { email, password } = req.body;
	const isEmailExist = await UserModel.findOne({ email });
	if (!isEmailExist) {
		throw new CustomError('Email Not Exists', 404);
	}
	const user = await UserModel.findOne({ email });
	if (!user) {
		throw new CustomError('User Not Exists', 404);
	}
	const isPasswordCorrect = await bcrypt.compare(password, user.password);
	if (!isPasswordCorrect) {
		throw new CustomError('Password Incorrect', 400);
	}
	user.password = undefined;
	const token = createToken({ username: user.username, _id: user._id });
	res.status(200).json({
		user,
		token,
	});
});
export { signup, login };
