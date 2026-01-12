const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {

  // Log request
  const log = `${Date.now()} : ${req.url} New Req Received\n`;

  // Parse URL
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      res.end("Error writing log");
      return;
    }

    switch (myUrl.pathname) {

      case "/":
        res.end("HomePage");
        break;

      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hello ${username}`);
        break;

      default:
        res.end("404 Not Found");
    }
  });
});

// Start server
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
