import mongoose from "mongoose";

const mongo_URI = "mongodb+srv://richardson12230:richardson12230@cluster0.34rtbym.mongodb.net/";

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