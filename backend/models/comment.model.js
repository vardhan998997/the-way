import mongoose from 'mongoose';
const Schema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		comment: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);
const model = mongoose.model('NewComment', Schema);
export default model;
