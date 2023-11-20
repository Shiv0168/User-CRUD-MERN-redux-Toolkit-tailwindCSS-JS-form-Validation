const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username required !!!"],
      unique: [true, "username already registered !!!"],
    },
    email: {
      type: String,
      required: [true, "email required !!!"],
      unique: [true, "email already registered !!!"],
    },
    password: {
      type: String,
      required: [true, "password required !!!"],
      unique: [true, "password already registered !!!"],
    },
  },
  { timestamps: true }
);

exports.User = mongoose.model("User", userSchema);
