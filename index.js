const http = require("http");

// serveText("Hello Week 3!");

// function serveText(theText) {
//   const server = http.createServer(function (req, res) {
//     console.log("Request received!");
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write(theText);
//     res.write(", eat more lunch!");
//     res.end();
//   });
//   server.listen(3000, () => {
//     console.log("Server running on port 3000");
//   });
// }

serveHTML("<html><body><h1>Hello Week 3!</h1></body></html>");

function serveHTML(theHTML) {
  const server = http.createServer(function (req, res) {
    console.log("Request received!");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(theHTML);
    res.end();
  });
  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}
