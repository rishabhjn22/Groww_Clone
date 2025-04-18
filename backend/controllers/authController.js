const User = require("../models/User");
const jwt = require("jsonwebtoken");


// Social login handler (Google/Apple)
exports.socialLogin = async (req, res) => {
  const { provider, token, userDetails } = req.body;

  try {
    // Verify the token with Google or Apple (simplified here)
    // You'll use Google's or Apple's SDK for this in the real app

    // Check if user exists
    let user = await User.findOne({
      providerId: userDetails.id,
      authProvider: provider,
    });

    if (!user) {
      // If user doesn't exist, create a new user
      user = new User({
        name: userDetails.name,
        email: userDetails.email,
        authProvider: provider,
        providerId: userDetails.id,
      });
      await user.save();
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Mobile verification handler (send OTP)
exports.sendOTP = async (req, res) => {
  const { mobile } = req.body;

  try {
    // Generate OTP
    const otp = generateOTP();

    // Set OTP expiry to 5 minutes
    const otpExpiry = Date.now() + 300000; // 5 minutes

    // Save OTP in DB (linked to user)
    let user = await User.findOne({ email: req.user.email }); // Assuming user is logged in
    user.mobile = mobile;
    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    // Send OTP via SMS (integrate Twilio or similar service)
    await sendOTP(mobile, otp);

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// OTP Verification handler
exports.verifyOTP = async (req, res) => {
  const { otp, mobile } = req.body;

  try {
    // Find the user by mobile
    let user = await User.findOne({ mobile });

    if (!user || user.otp !== otp || user.otpExpiry < Date.now()) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    // Mark mobile as verified
    user.isMobileVerified = true;
    user.otp = undefined; // Clear OTP after verification
    user.otpExpiry = undefined; // Clear expiry
    await user.save();

    res.status(200).json({ message: "Mobile verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
