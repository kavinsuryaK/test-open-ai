const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js Server!");
});

// Sample API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API!" });
});

// POST endpoint example
app.post("/api/data", (req, res) => {
  const data = req.body;
  res.json({ message: "Data received!", data });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
