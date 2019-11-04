module.exports = (()=>{
	const express = require('express');
	const router = express.Router();

	const controller = require('./controller');

	router.get('/clock/:hour/:minute?', controller.smallestClockAngle);

	return router;
})();
