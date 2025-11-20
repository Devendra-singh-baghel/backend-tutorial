/*
Route Middleware

Q1. What is route Middleware.
Q2. Make Route Middleware.
Q3. Apply Route Middleware.
Q4. How to make 2 Route Middleware and apply
*/

import express from "express";

const app = express();

const PORT = 8000;

const checkLogin = (req, res, next) => {
  /*
    Query params are strings:
      auth=true → "true"
      auth=false → "false"

    So comparing req.query.auth == false will always be false.

    Now behavior will be correct:
      ?auth=true → allowed
      ?auth=false → blocked
      no auth → blocked
  */

  if (!req.query.auth || req.query.auth === "false") {
    return res.send("Unauthorized Request! Please Login First!");
  }

  next();
};

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/register", (req, res) => {
  res.send("<h1>Register Page</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

//secure route
app.get("/about", checkLogin, (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
