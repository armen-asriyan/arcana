// Import the necessary modules
import express from "express";
import dotenv from "dotenv";

// Set up environment variables
dotenv.config();

// Use express function from the express module
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Export the app
export default app;
