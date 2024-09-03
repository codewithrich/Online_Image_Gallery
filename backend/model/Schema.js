import mongoose from "mongoose";

//schema creation
const imageSchema = new mongoose.Schema(
  {
    name: String,
    mail: String,
    image: String
  },
  { timestamps: true }
);

//model creation
const imageModel = new mongoose.model("Images" , imageSchema);

export default imageModel;