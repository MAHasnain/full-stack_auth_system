import { config } from "@/config/config";
import mongoose from "mongoose";

const { mongodb_uri } = config;

export async function dbConnect() {
  try {
    mongoose.connect(mongodb_uri!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected Successfully.");
    });
    connection.on("error", (err) => {
      console.log("MongoDB connection error" + err);
      process.exit();
    });
  } catch (error) {
    console.error("Something went wrong.");
    console.log(error);
  }
}
