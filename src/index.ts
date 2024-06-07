import app from './app';
import connectDB from './db';

const port = process.env.PORT || 3000;

async function run() {
  await connectDB();

  app.listen(port, () => {
    console.log(`Listening http://localhost:${port}`);
  });
}

run();
