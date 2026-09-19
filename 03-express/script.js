const express = require("express");
const app = express();

// Create a middleware

app.use((req, res, next) => {
  console.log("middleware working properly...!");
  next();
});

app.use((req, res, next) => {
  console.log("This is middleware 2");
  next();
});

// Create / Route

app.get("/", (req, res) => {
  res.send("Hello world, From Home Page");
});

// Create /profile Route

app.get("/profile", (req, res) => {
  res.send("Hello , From Profile");
});

// Dynamic routing, route parameter

app.get("/profile/:username/:password", (req, res) => {
  res.send(`Hello , From ${req.params.username} and my password is ${req.params.password}`);
});

// Run the server

app.listen(3000, () => {
  console.log("Server is running");
});
