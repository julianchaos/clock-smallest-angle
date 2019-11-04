module.exports = (()=>{
	const express = require('express');
	const router = express.Router();

	router.get('/', (req, res, next) => {
		res.status(200).json({ message: 'Hello World!'});
		next();
	});

	router.use('/rest', require('./clock/router'));

	router.use((req, res) => {
		// TODO - save response to cache;
		res.end();
	});

	return router;
})();
