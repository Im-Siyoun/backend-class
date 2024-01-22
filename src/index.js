import express from "express";
import UserRouter from "./router/user.js";
import mongoose from "mongoose";
import PostRouter from "./router/post.js";
import openapiRouter from "./router/openapi.js";
import { scheduleJob } from "node-schedule";
import ExchangeFunction from "./function/openApi.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
app.use(express.json());
app.use(express.urlencoded());
app.use(UserRouter);
app.use("/post", PostRouter);
app.use("/data", openapiRouter);

mongoose.connect(process.env.DB_URL);

app.listen(3000, () => {
  console.log("서버가 실행되었습니다.");
  scheduleJob("0/10 * * * * *", ExchangeFunction);
});
