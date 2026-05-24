module.exports = {
 apps: [
 {
 name: "alice",
 script: "./src/index.js",
 env: {
 DB_STRING: "",
 PORT: 8080,
 TELEGRAM_API: "",
 BOT_NAME: "Alice",
 BOT_USERNAME: "aliceevilloficialbot",
 },
 },
 ],
};
