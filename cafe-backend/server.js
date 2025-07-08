import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import env from 'dotenv'
env.config();
const app = express();
app.use(express.json());
const dbuser = encodeURIComponent(process.env.DBUSER)
const dbpass = encodeURIComponent(process.env.DBPASS)
// mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
//   app.listen(8083, () => {
//     console.log("Server started");
//   });  
// });
mongoose.connect(process.env.MONGODB_URL).then(() => {
  app.listen(8083, () => {
    console.log("Server started");
  });
});
app.use("/api/users", userRouter);