const { bot } = require("../src/bot");
const { initHandler } = require("../src/handlers/main");
const { connectDB } = require("../src/database");

let handlerInitialized = false;

module.exports = async (req, res) => {
 if (req.method !== "POST") {
 return res.status(405).json({ error: "Method not allowed" });
 }

 try {
 await connectDB();

 if (!handlerInitialized) {
 bot.deleteWebHook().catch(() => {});
 const baseUrl = `${req.headers["x-forwarded-proto"] || "https"}://${req.headers["host"]}`;
 await bot.setWebHook(`${baseUrl}/api/webhook`);
 initHandler();
 handlerInitialized = true;
 }

 if (req.body) {
 bot.processUpdate(req.body);
 } else {
 let body = "";
 for await (const chunk of req) {
 body += chunk;
 }
 if (body) {
 bot.processUpdate(JSON.parse(body));
 }
 }

 res.status(200).json({ ok: true });
 } catch (err) {
 console.error("[WEBHOOK] Error:", err.message);
 res.status(500).json({ error: "Internal server error" });
 }
};
