import dotenv from "dotenv"; // Import dotenv to load environment variables
import express from "express";
import { connectDB } from "./db/connectDB.js"; // Import the connectDB function
import authRoutes from "./routes/auth.route.js"; // Import the auth routes
import cookieParser from "cookie-parser"; // Import cookie-parser to handle cookies
import cors from "cors"; // Import cors for Cross-Origin Resource Sharing
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
dotenv.config(); // Load environment variables from .env file

// Validate environment variables
if (!process.env.PORT) {
  console.error("Error: PORT is not defined in .env file");
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5000; // Set the port to the value in .env or default to 5000


app.use(cors({
  origin: process.env.CLIENT_URL, // Allow requests from the client URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
})); 
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cookieParser()); // Middleware to parse cookies


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes); // Use a more descriptive route path

// Start the server
const server = app.listen(PORT, async () => {
  try {
    await connectDB(); // Await database connection
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
});

// Handle server startup errors
server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use`);
  } else {
    console.error("Server startup error:", error);
  }
  process.exit(1);
});