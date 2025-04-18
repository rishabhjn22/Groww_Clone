const validateMobileAndEmail = (req, res, next) => {
  const { mobile, email } = req.body;

  const mobileRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (mobile && !mobileRegex.test(mobile)) {
    return res.status(400).json({ message: "Invalid mobile number" });
  }

  if (email && !emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  next();
};

module.exports = validateMobileAndEmail;
