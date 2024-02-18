// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.Port || 8000, () => {
      console.log(`Server running at port ${process.env.Port}`);
    });
  })
  .catch((err) => {
    console.log("!!Mongo db connection failed!!", err);
  });

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://shimantamay:shimanta@28@shimancluster.zxxmikb.mongodb.net/videotube"
//     );
//     app.on("error", (error) => {
//       console.log("ERRR", error);
//       throw error;
//     });
//     app.listen(process.env.Port, () => {
//       console.log("Started at:");
//     });
//   } catch (error) {
//     console.error("Error: ", error);
//   }
// })();
