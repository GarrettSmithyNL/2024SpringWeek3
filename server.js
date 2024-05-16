const http = require("http");
const fs = require("fs");
const path = require("path");

global.DEBUG = true;

function fetchFile(filePath, res) {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500: Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content, "utf8");
    }
  });
}

const server = http.createServer((req, res) => {
  if (DEBUG) console.log("Request URL: " + req.url);
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      if (DEBUG) console.log("Path: " + path);
      fetchFile(path, res);
      break;
    case "/about":
      path += "about.html";
      if (DEBUG) console.log("Path: " + path);
      fetchFile(path, res);
      break;
    case "/home":
      path += "home.html";
      if (DEBUG) console.log("Path: " + path);
      fetchFile(path, res);
      break;
    default:
      if (DEBUG) console.log("404: Page not found");
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404: Page not found");
      break;
  }
});

server.listen(3000, () => {
  console.log("Server running...");
});
