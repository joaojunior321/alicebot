const dotenv = require("dotenv");
dotenv.config();

const { initHandler } = require("./handlers/main.js");
const { bot } = require("./bot");

const useWebhook = process.env.VERCEL === "1";

if (useWebhook) {
 console.log("Running in Vercel webhook mode. Handler initialized via /api/webhook.");
} else {
 initHandler();

 const http = require("http");
 const port = process.env.PORT || 8080;

 const server = http.createServer((request, response) =>
 response.writeHead(200, { "content-type": "application/json" })
 );

 server.listen(port);
}
