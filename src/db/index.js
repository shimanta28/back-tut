import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://shimantamay:shimanta123@shimancluster.zxxmikb.mongodb.net/videotube"
    );
    console.log("MOngoose conected");
  } catch (error) {
    console.error("ERRR", error);
    process.exit(1);
  }
};

export default connectDB;
