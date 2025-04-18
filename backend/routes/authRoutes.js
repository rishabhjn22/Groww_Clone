const express = require("express");
const {
  socialLogin,
  sendOTP,
  verifyOTP,
} = require("../controllers/authController");
const router = express.Router();
// const { validateInput } = require("../middlewares/validateInput");

// Social login route
router.post("/social-login", socialLogin);

// Mobile verification routes
router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);

module.exports = router;
