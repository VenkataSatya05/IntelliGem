import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import chatRouter from './routes/chat.js'; // Updated path to routes/chat.js

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // Adjust TLS settings based on your MongoDB setup
      // tls: true, // Remove if local MongoDB without SSL
      // tlsInsecure: true // For testing self-signed certs
    });
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error('Failed to connect with Db', err);
  }
};

// Mount the chat router
app.use('/api', chatRouter);

// Start the server and connect to MongoDB
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
  connectDB();
});