const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  authProvider: { type: String, enum: ['google', 'apple'], required: true },
  providerId: { type: String, required: true }, // googleId or appleId
  mobile: { type: String },
  isMobileVerified: { type: Boolean, default: false },
  otp: String,
  otpExpiry: Date,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);