import { useState, useEffect } from "react";
const useCountDown = (dateComplete) => {
	const countDownDateComplete = new Date(dateComplete).getTime();
	const [countDown, setCountDown] = useState(
		countDownDateComplete - new Date().getTime()
	);
	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDateComplete - new Date().getTime());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [countDownDateComplete]);

	return getReturnValues(countDown);
};
const useSumCountDown = (timerSum) => {
	return getReturnValues(timerSum);
};
const getReturnValues = (count) => {
	let days = Math.floor(count / (24 * 60 * 60 * 1000));
	let hours = Math.floor((count % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
	let minutes = Math.floor((count % (60 * 60 * 1000)) / (60 * 1000));
	let seconds = Math.floor((count % (60 * 1000)) / 1000);
	return [days, hours, minutes, seconds];
};
export { useCountDown, useSumCountDown };
