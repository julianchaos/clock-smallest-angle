class Clock {
	static smallestAngleBetweenArrows(hour, minute) {
		hour = Math.abs(hour)%12;
		minute = Math.abs(minute)%60;

		/**
		 * Clock arrows angle function
		 * (|11 * minute - 60 * minute|) / 2 = angle
		 */
		let angle = Math.abs(11 * minute - 60 * hour) / 2;

		// returns always smallest angle
		return angle < 180 ? angle : 360-angle;
	}
}

module.exports = Clock;
