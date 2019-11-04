const redis = require('redis');
const config = require('config');

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
        return client.get(key);
    }
}

module.exports = Cache;
