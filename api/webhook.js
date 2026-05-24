const { bot } = require("../src/bot");
const { initHandler } = require("../src/handlers/main");
const { connectDB } = require("../src/database");

let handlerInitialized = false;
let dbReady = false;
let dbPromise = null;

function ensureDB() {
 if (dbReady) return Promise.resolve();
 if (!dbPromise) dbPromise = connectDB().then(() => { dbReady = true; });
 return dbPromise;
}

module.exports = async (req, res) => {
 if (req.method !== "POST") {
 return res.status(405).json({ error: "Method not allowed" });
 }

 try {
 if (!handlerInitialized) {
 await ensureDB();
 initHandler();
 handlerInitialized = true;
 } else if (!dbReady) {
 await ensureDB();
 }

 let body = req.body;
 if (!body) {
 let raw = "";
 for await (const chunk of req) raw += chunk;
 body = raw ? JSON.parse(raw) : null;
 }

 if (body) bot.processUpdate(body);

 res.status(200).json({ ok: true });
 } catch (err) {
 console.error("[WEBHOOK] Error:", err.message);
 res.status(500).json({ error: "Internal server error" });
 }
};
