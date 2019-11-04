# Clock - Smallest Angle
An **Express** API that receives hour and minute information and returns the smallest angle between the arrows of an analog clock.

### Cache
It does haves a simple cache layer based on a **Redis** database

## Running
### Node
First, install all dependencies

```
npm install
```

Redis connection looks for an redis-server instance responding on `redis://redis`. To make your local redis-server instance answer on this url just add the following line to your `hosts` file

```
127.0.0.1       redis
```

After that just run `npm start` and the service will be available on `localhost:3030`.


### Docker
For running docker image run the following command, changing `[REDIS_SERVER_IP]`.
```
docker run -p 3030:3030 -d --add-host=redis:[REDIS_SERVER_IP] julianchaos/clock-smallest-angle
```

#### Or just build up with Docker Compose
```
docker-compose up
```

## Requests
The following endpoints calculates the smallest angle between the two clock arrows:
```
/v1/rest/clock/:hour/:minute

/v1/rest/clock/14/36 // will return smallest angle for 2:26
/v1/rest/clock/7 // 7:00
```
