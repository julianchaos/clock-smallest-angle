const redis = require('redis');
const config = require('config');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

class Cache {

    static createClient() {
        const {redis: options} = config;
        return redis.createClient(options);
    }

    static set(key, value) {
        const client = Cache.createClient();
        client.set(key, value);
    }

    static get(key) {
        const client = Cache.createClient();
        return client.getAsync(key);
    }
}

module.exports = Cache;
