#  Products API backend
## Using node.js express mongodb and redis for cache

### Requirements 🛒
- Docker version 24.0.7
- Node.js v20.10.0
- npm 10.2.3

### Instalation 🔨
> [!IMPORTANT]
> Change your current folder to mongo_docker


Use command below to create a docker image for mongo database
```
docker build -t <image_name> .
```
Replace <image_name> with your own name for docker image

Use command below to run a docker container from previously created image
```
docker run -d -p 27017:27017 --name <container_name> <image_name>
```
Replace <image_name> with what you previously named it
Replace <container_name> with your own name for docker container

Now we will run a docker container with redis instance 
Use one of two commands below to run docker container with redis
```
docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest
```
or
```
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```
> [!NOTE]
> Use redis/redis-stack-server:latest if you want only redis server without insight <br />
> or use redis/redis-stack:latest so that you can access Redis Insight by pointing your browser to localhost:8001

> [!IMPORTANT]
> Change your current folder to root folder of the project <br />

Use command below to install all dependencies
```
npm i
```

After executing everything above run next command to start the backend server
```
npm run start
```
And that's it!
Your app is running on http://localhost:3000
# Endpoints
## There are 3 endpoints
- localhost:3000/api/v1/products/search?q=sport <br />
  where you can set 'q' parameter to be your search query

- localhost:3000/api/v1/products/topDiscount <br />
  gets 5 products with the biggest discounts

- localhost:3000/api/v1/products/bestReview <br />
  gets 5 products with the best reviews (rating is calculated using reviews rate)

> [!NOTE]
> Last two endpoints use redis to cache the result

