import app from './app';
import connectDB from './db';
import { connectRedis } from './redis';

const port = process.env.PORT || 3000;

async function run() {
  await connectDB();
  await connectRedis();

  app.listen(port, () => {
    console.log(`Listening http://localhost:${port}`);
  });
}

run();
