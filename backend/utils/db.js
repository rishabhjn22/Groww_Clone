const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // MongoDB connection string (use your own database name here)
    const dbURI = process.env.MONGO_URI;
    
    // Connect to MongoDB
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
