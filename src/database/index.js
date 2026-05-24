const mongoose = require("mongoose");
const dotenv = require("dotenv");
const MessageSchema = require("./models/message");
const ChatSchema = require("./models/groups");
const userSchema = require("./models/users");

dotenv.config();

mongoose
 .connect(process.env.DB_STRING)
 .then(() => console.log("MongoDB conectado com sucesso."))
 .catch((err) => {
 console.error("Erro ao conectar ao MongoDB:", err.message);
 process.exit(1);
 });

const MessageModel = mongoose.model("Reply", MessageSchema, "alice_replies");
const ChatModel = mongoose.model("Chat", ChatSchema, "alice_chats");
const UserModel = mongoose.model("User", userSchema, "alice_users");

module.exports = { MessageModel, ChatModel, UserModel };
