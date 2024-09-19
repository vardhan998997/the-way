import mongoose from 'mongoose';
const schema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);
const model = mongoose.model('UserTheWay', schema);
export default model;
