const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  if (Object.keys(req.body).length) {
    console.log("Body:", req.body);
  }
  next();
};

module.exports = logger;
