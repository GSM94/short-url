const mongoose = require('mongoose')
const link = process.env.MONGODB_URI
const dotenv = require('dotenv');
dotenv.config()

const connectDb = async () => {
  console.log('Connecting to MongoDB');

  try {
    await mongoose.connect(link);
    console.log('Successfully connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Перепроверьте необходимость критического завершения
  }

  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected. Attempting to reconnect...');
    connectDb(); // Попытка переподключения
  });

  mongoose.connection.on('reconnected', () => {
    console.log('MongoDB reconnected.');
  });

  mongoose.connection.on('error', err => {
    console.error(`MongoDB connection error: ${err}`);
  });
}

module.exports = connectDb