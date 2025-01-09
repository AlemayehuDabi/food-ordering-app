import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRouter from "./routes/UserRoutes";

mongoose.connect(process.env.MONGODB_STRING as string).then(() => {
  console.log("connected");
});

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/my/user", userRouter);

app.listen(7000, () => {
  console.log("server started at 7000");
});
