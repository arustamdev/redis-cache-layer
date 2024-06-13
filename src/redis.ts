import { createClient, RedisDefaultModules, RedisFunctions, RedisModules, RedisScripts } from 'redis';
import { RedisClientType } from 'redis';

let redisClient: RedisClientType<RedisDefaultModules & RedisModules, RedisFunctions, RedisScripts>;

async function connectRedis() {
  const url = process.env.REDIS_URL;
  try {
    redisClient = await createClient({ url: url })
      .on('error', (err) => console.log('Redis Client Error', err))
      .connect();
    console.log('Redis connected');
  } catch (e) {
    console.error(e);
  }
}

export { redisClient, connectRedis };
