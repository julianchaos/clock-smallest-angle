module.exports = (()=>{
    const express = require('express');
    const router = express.Router();

    router.use('/v1', require('../src/index.js'));

    return router;
})();
