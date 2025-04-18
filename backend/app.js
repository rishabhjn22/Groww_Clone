const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./utils/db");
const authRoutes = require("./routes/authRoutes");
const logger = require("./middlewares/logger");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(logger); // log all incoming requests

app.get("/", (req, res) => {
  res.send("Hello from Groww Clone backend 👋");
});
// Connect to DB
connectDB();

// Use auth routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
