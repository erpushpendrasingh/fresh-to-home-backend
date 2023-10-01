const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     firstname: String,
     lastname: String,
     email: String,
     mobile: Number,
     password: String,
     otp: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
