import express from "express";
import UserRouter from "./router/user.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(UserRouter);

mongoose.connect(
  "mongodb+srv://rlatldbs3321:by192472@cluster0.evl85.mongodb.net/lecture?retryWrites=true&w=majority"
);

app.listen(3000, () => {
  console.log("서버가 실행되었습니다.");
});
