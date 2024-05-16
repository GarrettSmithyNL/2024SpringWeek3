const http = require("http");
const fs = require("fs");

// serveText("Hello Week 3!");
// serveHTML("<h1>Hello Week 3!</h1>");
// serveFile("index.html");
serveJSON('{"name": "John", "age": 30, "city": "New York"}');

function serveText(theText) {
  const server = http.createServer(function (req, res) {
    console.log("Request received!");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(theText);
    res.write(", eat more lunch!");
    res.end();
  });
  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

let serveHTML = (theHTML) => {
  const server = http.createServer(function (req, res) {
    console.log(req.url);
    console.log("Request received!");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(theHTML);
    res.end();
  });
  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
};

function serveFile(fileName) {
  const server = http.createServer(function (req, res) {
    const theHTML = fs.readFileSync(fileName, "utf8");
    console.log("Request received!");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(theHTML);
    res.end();
  });
  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

function serveJSON(theJSON) {
  const server = http.createServer(function (req, res) {
    console.log("Request received!");
    console.log(req.method);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(theJSON);
    res.end();
  });
  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}
