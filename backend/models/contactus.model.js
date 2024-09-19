import mongoose from 'mongoose';
const schema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
		},
		email: {
			type: String,
			required: [true, 'Email is Required'],
		},
		message: {
			type: String,
			required: [true, 'Message is Required'],
		},
	},
	{ timestamps: true },
);
const model = mongoose.model('ContactUs', schema);
export default model;
