import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

const app = express();
const port = 3054;

dotenv.config();

app.use(express.json());

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection to mongoDB is successfull!");
  } catch (error) {
    console.error(error);
  }
};
//USER
app.use("/api", userRoute);

app.listen(port, () => {
  connectionToDB();
  console.log(`server started ${port}`);
});