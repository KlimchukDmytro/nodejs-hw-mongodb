import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

const mongoUri = process.env.MONGODB_URI; 
if (!mongoUri) {
  console.error('MONGODB_URI is not defined in .env file');
  process.exit(1); 
}

const initMongoConnection = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); 
  }
};

export default initMongoConnection;
