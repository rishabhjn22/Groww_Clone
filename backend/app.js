const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./utils/db');
const authRoutes = require('./routes/authRoutes');
const logger = require('./middlewares/logger');

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger); // log all incoming requests

// Connect to DB
connectDB();

// Use auth routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});