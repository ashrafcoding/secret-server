const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
Schema = mongoose.Schema;

const secretSchema = new Schema({
  secretText: {
    type: String,
    description: "This text will be saved as a secret",
    required: true,
  },
  hash: {
    type: String,
    description: "Unique hash to identify the secret",
    unique: true,
    default: uuidv4,
    required: true,
  },
  createdAt: {
    type: Date,
    description: "The date and time of the creation",
    required: true,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    description:
      "The secret won't be available after the given time. The value is provided in seconds. 0 means never expires",
    required: true,
  },
});

module.exports = mongoose.model("Secret", secretSchema);
