// Import app.js
import app from "./app.js";

// Import the connectDB function
import connectDB from "./config/database.js";

// Define the port
const PORT = process.env.PORT || 3030;

// Check if the server is in production
const isProduction = process.env.NODE_ENV === "production";

// Function to start the server
const startServer = async () => {
  try {
    // Wait for the database to connect before starting the server
    // await connectDB();

    app.listen(PORT, () => {
      // Check if the server is in production and log the appropriate message
      if (!isProduction) {
        console.log(`Server running on http://localhost:${PORT}`);
      } else {
        console.log(`Server running on ${PORT}`);
      }
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

// Start the server
startServer();
