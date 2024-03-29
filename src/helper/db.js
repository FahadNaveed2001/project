import mongoose from "mongoose";
import { User } from "@/models/user";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // Increase timeout for server selection
      socketTimeoutMS: 45000, // Increase socket timeout
      connectTimeoutMS: 30000, // Increase connection timeout
    });

    console.log("Database Connected");
    console.log("Connected with Host", connection.host);
  } catch (error) {
    console.log("Failed to connect Database");
    console.log(error);
  }
};