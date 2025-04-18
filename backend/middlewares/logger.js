const logger = (req, res, next) => {
  const bodyKeys = req.body ? Object.keys(req.body) : [];
  console.log(`${req.method} ${req.path} - Body keys:`, bodyKeys);
  next();
};
module.exports = logger;
