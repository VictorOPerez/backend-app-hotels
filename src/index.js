import express, { response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import apiRoute from "./routes/api.js";

const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconected");
});
app.use(express.json());
// middlewares

app.use("/api", apiRoute);

app.use((req, res, next) => {
  console.log("Hi im a middleware");
  response;
});

app.listen(8800, () => {
  connect();
  console.log(`App in port ${8800}`);
});
