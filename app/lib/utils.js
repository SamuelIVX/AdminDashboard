/*
import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("MongoDB connection error");
  }
};
*/

import mongoose from "mongoose";

let isConnected = false; // Tracks connection state across function calls.

export const connectToDB = async () => {
  try {
    // If already connected, reuse the connection.
    if (isConnected) {
      console.log("Using existing MongoDB connection");
      return;
    }

    // Otherwise, create a new connection.
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true; // Mark connection as established.
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("MongoDB connection error");
  }
};
