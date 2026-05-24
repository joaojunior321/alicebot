const mongoose = require("mongoose");
const MessageSchema = require("./models/message");
const ChatSchema = require("./models/groups");
const userSchema = require("./models/users");

if (process.env.NODE_ENV !== "production") {
 const dotenv = require("dotenv");
 dotenv.config();
}

let cachedConn = null;

async function connectDB() {
 if (cachedConn && mongoose.connection.readyState === 1) return cachedConn;

 if (mongoose.connection.readyState === 1) {
 cachedConn = mongoose.connection;
 return cachedConn;
 }

 if (mongoose.connection.readyState === 2) {
 await new Promise((resolve) => mongoose.connection.once("open", resolve));
 cachedConn = mongoose.connection;
 return cachedConn;
 }

 cachedConn = await mongoose.connect(process.env.DB_STRING, {
 serverSelectionTimeoutMS: 10000,
 connectTimeoutMS: 10000,
 socketTimeoutMS: 30000,
 maxPoolSize: 5,
 minPoolSize: 1,
 });

 console.log("MongoDB conectado com sucesso.");
 return cachedConn;
}

const MessageModel = mongoose.model("Reply", MessageSchema, "alice_replies");
const ChatModel = mongoose.model("Chat", ChatSchema, "alice_chats");
const UserModel = mongoose.model("User", userSchema, "alice_users");

module.exports = { MessageModel, ChatModel, UserModel, connectDB };
