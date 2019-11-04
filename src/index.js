module.exports = (()=>{
	const express = require('express');
	const router = express.Router();

	router.get('/', (req, res, next) => {
		res.status(200).json({ message: 'Hello World!'});
	});

	router.use('/rest', require('./clock/router'));

	return router;
})();
