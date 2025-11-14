/*
Understand Client Request

Q1. What is client request?
Q2. Write code to access client request.
Q3. Make Pages with client request.
*/

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");

  //   console.log(req);
  //   console.log(req.url);
  //   console.log(req.headers);
  //   console.log(req.headers.host);
  //   console.log(req.method);
  //   console.log(req.statusCode);

  if (req.url == "/") {
    res.write("<h1>Home Page</h1>");
  } else if (req.url == "/login") {
    res.write("<h1>Login Page</h1>");
  } else if (req.url == "/profile") {
    res.write("<h1>Profile Page</h1>");
  } else {
    res.write("<h1>Other Page</h1>");
  }

  res.end();
});

server.listen(8000);
