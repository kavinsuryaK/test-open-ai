require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS
app.use(morgan("dev")); // Logging requests

// Routes
app.use("/api", apiRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Advanced Node.js Server!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

console.log("Hello World");

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
