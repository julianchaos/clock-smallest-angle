module.exports = (()=>{
	const express = require('express');
	const router = express.Router();

	router.get('/', (req, res, next) => {
		res.status(200).send({ message: 'Hello World!'});
		next();
	});

	router.use((req, res) => {
		// TODO - save response to cache;
	});

	return router;
})();
