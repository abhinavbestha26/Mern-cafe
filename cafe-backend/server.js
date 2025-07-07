import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
const app = express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
  app.listen(8083, () => {
    console.log("Server started");
  });
});
app.use("/api/users", userRouter);