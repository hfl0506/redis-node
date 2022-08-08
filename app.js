const express = require("express");
const redis = require("redis");
const fs = require("fs");
const parser = require("xml2json");

const app = express();

let redisClient;

(async () => {
  redisClient = redis.createClient({
    host: "redis-server",
    port: 6379,
  });

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

app.get("/", async (req, res) => {
  const xmlFile = fs.readFileSync("./config.xml", { encoding: "utf-8" });

  if (!xmlFile) res.status(400).send("failed to read xml file");

  let parsered = parser.toJson(xmlFile);

  let json = JSON.parse(parsered);

  await redisClient.set(
    "subdomains",
    JSON.stringify(json.config.subdomains.subdomain)
  );

  await redisClient.set("cookies", JSON.stringify(json.config.cookies.cookie));

  console.log(parsered);
  res.status(200).send(parsered);
});

module.exports = app;
