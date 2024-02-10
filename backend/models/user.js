const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name."],
    maxlength: [30, "Your name cannot exceed 30 characters"],
  },
  contact: {
    type: Number,
    required: true,
    unique: true, // Ensure each contact number is unique
    match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"],
    maxlength: [128, "Password must be less than 128 characters long"],
    validate: {
      validator: function (value) {
        // Require at least one uppercase letter, one lowercase letter, one special character and one number
        const regex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/])[a-zA-Z\d!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/]{8,}$/;
        return regex.test(value);
      },
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one special character and one number",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
});

// encrypting password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// return jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

module.exports = mongoose.model("User", userSchema);
