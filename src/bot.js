const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_API;
const useWebhook = process.env.VERCEL === "1";

if (useWebhook) {
 exports.bot = new TelegramBot(token, { webHook: true });
} else {
 exports.bot = new TelegramBot(token, { polling: true });
}
