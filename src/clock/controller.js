module.exports = (()=>{
	const Clock = require('./business/Clock');

	function smallestClockAngle(req, res, next) {
		const {hour, minute = 0} = req.params;

		try {
			let angle = Clock.smallestAngleBetweenArrows(hour, minute);
			res.status(200).json({angle: angle});
		} catch(err) {
			res.status(500).json({error: err.message});
		} finally {
			next();
		}
	}

	return {
		smallestClockAngle: smallestClockAngle
	}
})();
