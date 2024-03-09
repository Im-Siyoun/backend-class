import express from "express";
import UserRouter from "./router/user.js";
import mongoose from "mongoose";
import PostRouter from "./router/post.js";
import AuthRouter from "./router/auth.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use("/post", PostRouter);
app.use("/user", UserRouter);
app.use("/auth", AuthRouter);

mongoose.connect(
  "mongodb+srv://rlatldbs3321:by192472@cluster0.evl85.mongodb.net/lecture?retryWrites=true&w=majority"
);

app.listen(3000, () => {
  console.log("서버가 실행되었습니다.");
});
