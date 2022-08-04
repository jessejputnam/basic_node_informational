"use strict";

const http = require("http");
const fs = require("fs/promises");

const port = process.env.PORT || 8080;

const server = http.createServer(async (req, res) => {
  const pages = ["index", "contact-me", "about"];
  let reqPage = req.url.slice(1) || "index";
  if (!pages.includes(reqPage)) reqPage = "404";
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const data = await fs.readFile(`./${reqPage}.html`, { encoding: "utf8" });
  res.write(data);
  res.end();
});

server.listen(port, () => {
  console.log("Server running at port " + port);
});
