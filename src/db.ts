import mongoose from 'mongoose';

async function connectDB() {
  const host = process.env.MONGO_HOST;
  const port = process.env.MONGO_PORT;
  const username = process.env.MONGO_USERNAME;
  const password = process.env.MONGO_PASSWORD;
  const database = process.env.MONGO_DATABASE;
  try {
    await mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`);
    console.log('mongodb connected');
  } catch (e) {
    console.error(e);
  }
}

export default connectDB;
