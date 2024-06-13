import { NextFunction, Response, Request } from 'express';
import { redisClient } from '../redis';

async function staticCache(req: Request, res: Response, next: NextFunction) {
  const key = req.path;
  const cachedResponse = await redisClient.get(key);

  if (cachedResponse) {
    return res.status(200).json(JSON.parse(cachedResponse));
  }

  const oldResJson = res.json;
  res.json = (data) => {
    res.json = oldResJson;

    redisClient.set(req.path, JSON.stringify(data), { EX: 3600 });

    return res.json(data);
  };
  next();
}

export { staticCache };
