const { Schema } = require("mongoose");

const MessageSchema = new Schema({
 message: {
 unique: true,
 required: true,
 type: String,
 },
 reply: {
 type: Array,
 trim: true,
 },
 reply_types: {
 type: [String],
 default: [],
 },
});

module.exports = MessageSchema;
