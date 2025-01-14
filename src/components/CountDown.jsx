import { useEffect, useState } from "react";

const CountDown = () => {
	const [time, setTime] = useState("");

	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let timer;
		if (isRunning && time > 0) {
			timer = setTimeout(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);
		}
		return () => clearTimeout(timer);
	}, [isRunning, time]);

	const handleInputChange = (e) => {
		const timeValue = parseInt(e.target.value);
		if (timeValue > 0 && !isNaN(timeValue)) {
			setTime(timeValue);
		}
	};

	return (
		<div>
			<label htmlFor="time">Enter Time (in seconds): </label>
			<input
				type="text"
				name="time"
				id="time"
				value={time}
				onChange={handleInputChange}
			/>
			<br />
			<br />
			<button onClick={() => setIsRunning(!isRunning)}>
				{isRunning ? "STOP" : "START"}
			</button>
			<h1>
				Count Down: {time} second{time !== 1 ? "s" : ""}
			</h1>
		</div>
	);
};
export default CountDown;
