import React from "react";
import { useSumCountDown } from "./handle";

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
export default SumTimer;
