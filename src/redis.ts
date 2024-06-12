import { createClient } from 'redis';

let client;

async function connectRedis() {
  const url = process.env.REDIS_URL;
  try {
    client = await createClient({ url: url })
      .on('error', (err) => console.log('Redis Client Error', err))
      .connect();
    console.log('Redis connected');
  } catch (e) {
    console.error(e);
  }
}

export { client, connectRedis };
