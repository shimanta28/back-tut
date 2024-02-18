import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.Mongodb_URI}/${DB_Name}`
    );
    console.log("MOngoose conected");
  } catch (error) {
    console.error("ERRR", error);
    process.exit(1);
  }
};

export default connectDB;
