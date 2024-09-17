import mongoose from "mongoose";
const Schema = new mongoose.Schema({
  degreeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Degree",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subjects: [
    {
      type: String,
    },
  ],
  futurePaths: {
    type: String,
    required: true,
  },
  preparationTips: {
    type: String,
    required: true,
  },
},{timestamps:true});
const model=mongoose.model("Course",Schema)
export default model;
