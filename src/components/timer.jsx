import React from "react";
import { useSumCountDown, useCountDown } from "./handle";
const Timer = ({ dateComplete, onClick }) => {
	const [days, hours, minutes, seconds] = useCountDown(dateComplete);
	if (days + hours + minutes + seconds <= 0) {
		return <span onClick={onClick}> Timeout!!!</span>;
	} else {
		return (
			<div>
				<span onClick={onClick}>
					{" "}
					Timer: {days}d : {hours}h : {minutes}m : {seconds}s
				</span>
			</div>
		);
	}
};
const SumTimer = ({ sumCountDown }) => {
	const [days, hours, minutes, seconds] = useSumCountDown(sumCountDown);
	if (sumCountDown) {
		return (
			<span style={{ fontSize: 23, fontWeight: "bold" }}>
				Sum Timer: {days}d : {hours}h : {minutes}m : {seconds}s
			</span>
		);
	}
};
export { Timer, SumTimer };
