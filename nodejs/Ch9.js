/*
Make Form, Submit Form and Handle Form Request Data

Q1. Make html form in JS file.
Q2. Submit it with post request.
Q3. Test flow.
Q4. Make form with html file.
Q5. Load html file with FS module.
Q6. Get data form request.
Q7. Handle data with buffer class.
Q8. Make request data readable.
Q9. Check Output
*/

const http = require("http");
const fs = require("fs");
const queryString = require("querystring");

const server = http.createServer((req, res) => {
  fs.readFile("form.html", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.write("Internal Server Error!");
      res.end();
      return;
    }

    res.writeHead(200, { "content-type": "text/html" });
    if (req.url == "/") {
      res.write(data);
    } else if (req.url == "/submit") {
      const userData = [];
      req.on("data", (chunk) => {
        userData.push(chunk);
      });

      let readableData;
      req.on("end", () => {
        let rawData = Buffer.concat(userData).toString();
        readableData = queryString.parse(rawData);
        console.log(rawData);
        console.log(readableData);
      });

      res.write("<h1>Register Successfull.</h1>");
    }
    res.end();
  });
});

server.listen(8000);
