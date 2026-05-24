const mongoose = require("mongoose");
const MessageSchema = require("./models/message");
const ChatSchema = require("./models/groups");
const userSchema = require("./models/users");

if (process.env.NODE_ENV !== "production") {
 const dotenv = require("dotenv");
 dotenv.config();
}

let conn = null;

async function connectDB() {
 if (conn && mongoose.connection.readyState === 1) return conn;

 conn = await mongoose.connect(process.env.DB_STRING);
 console.log("MongoDB conectado com sucesso.");
 return conn;
}

const MessageModel = mongoose.model("Reply", MessageSchema, "alice_replies");
const ChatModel = mongoose.model("Chat", ChatSchema, "alice_chats");
const UserModel = mongoose.model("User", userSchema, "alice_users");

module.exports = { MessageModel, ChatModel, UserModel, connectDB };
