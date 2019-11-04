module.exports = (() => {
    const express = require('express');
    const app = express();

    app.use((req, res, next) => {
        // TODO - loads response from cache
        next();
    })

    return app;
})();
