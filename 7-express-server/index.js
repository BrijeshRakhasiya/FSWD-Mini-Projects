const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("<strong>Welcome to  Brijesh Rakhasiya | ID: 23AIML060's Express Server!</strong>");
});

// About route
app.get("/about", (req, res) => {
  res.send("I am  Brijesh Rakhasiya from AIML 3rd Year");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("linkedin :- https://www.linkedin.com/in/brijesh-rakhasiya-bba776289/");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
