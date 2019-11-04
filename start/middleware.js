module.exports = (() => {
    const express = require('express');
    const app = express();
    const Cache = require('../src/commom/business/Cache')

    // loads response from cache
    app.use((req, res, next) => {
        Cache.get(req.originalUrl)
            .then(data => {
                if(data)
                    res.status(200).json(JSON.parse(data));
                else
                    next();
            });
    });

    // overrides res.json saving it's data to cache
    app.use((req, res, next) => {
        let json = res.json;

        res.json = function(data) {
            console.log('Setting cache');
            console.log(`Request URL: ${req.originalUrl}`);
            console.log(`Data: ${JSON.stringify(data)}`);

            Cache.set(req.originalUrl, JSON.stringify(data));
            json.apply(res, arguments);
        }

        next();
    });

    return app;
})();
