import React, { memo } from "react";
import { useCountDown } from "./handle";
const Timer = ({ dateComplete, onClick }) => {
	const [days, hours, minutes, seconds] = useCountDown(dateComplete);
	if (days + hours + minutes + seconds <= 0) {
		return <span onClick={onClick}> Timeout!!!</span>;
	} else {
		return (
			<span onClick={onClick}>
				{" "}
				Timer: {days}d : {hours}h : {minutes}m : {seconds}s
			</span>
		);
	}
};

export default memo(Timer);
