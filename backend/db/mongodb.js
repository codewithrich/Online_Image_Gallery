import mongoose from "mongoose";

const mongo_URI = "mongodb://127.0.0.1:27017/images";

const connectDB = async () => {
  try {
    await mongoose
      .connect(mongo_URI, { serverSelectionTimeoutMS: 5000 })
      .then(() => {
        console.log("Imagegallery server started successfully");
      })
      .catch(() => {
        console.log("Error connecting to imagegallery server");
      });
  } catch (error) {
    console.log("Error connecting to imagegallery server");
    process.exit(1);
}
};

export default connectDB;