/*
Create File with Requested Data

Q1. Create File with Synchronous way.
Q2. Create File with Asynchronous way.
*/

const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const { error } = require("console");

const server = http.createServer((req, res) => {
  fs.readFile("form.html", "utf-8", (error, data) => {
    if (error) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.write("Internal server error!");
      res.end();
      return;
    }

    res.writeHead(200, { "content-type": "text/html" });

    if (req.url == "/") {
      res.write(data);
    } else if (req.url == "/submit") {
      let userData = [];
      req.on("data", (chunk) => {
        userData.push(chunk);
      });

      req.on("end", () => {
        let rawData = Buffer.concat(userData).toString();
        let formData = queryString.parse(rawData);
        let dataString =
          "My name is " +
          formData.username +
          " and my email is " +
          formData.email;
        console.log(dataString);

        fs.writeFileSync("" + formData.username + ".txt", dataString);
        console.log("file created!");
      });

      res.write("<h1>Register Successfull.</h1>");
    } else {
      res.write("<h1>Page Not Found.</h1>");
    }
    res.end();
  });
});

server.listen(8000);
