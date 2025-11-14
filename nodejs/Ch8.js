/*
Load Html file

Q1. Why need to load html file?
Q2. Create server.
Q3. Make html file.
Q4. Load html file with FS module.
Q5. Check Output
*/

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("home.html", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.write("internal server error");
      res.end();
      return;
    }
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    res.end();
  });
});

server.listen(8000);
