import mongoose from "mongoose";

//schema creation
const imageSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    mail: {
      type: "string",
      required: true,
    },
    gender: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
);

//model creation
const imageModel = new mongoose.model("Images" , imageSchema);

export default imageModel;