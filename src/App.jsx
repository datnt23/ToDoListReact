import { useState, useEffect, Children, useRef, useCallback } from "react";
import Timer from "./components/Timer";
import SumTimer from "./components/sumTimer";

import "./App.css";
function App() {
	const [toDo, setToDo] = useState("");
	const [timing, setTiming] = useState();
	const [array, setArray] = useState([]);
	const [sum, setSum] = useState(0);
	const id = useRef(0);
	useEffect(() => {
		localStorage.setItem("arr", JSON.stringify(array));
	}, [array]);
	function handleClickAdd() {
		let timeDone = new Date(timing);
		if (toDo === "") {
			alert("Enter your to do something!");
		} else if (timing === "" || timeDone.getTime() < new Date().getTime()) {
			alert("Enter your time to done!");
		} else {
			setArray([
				...array,
				{
					id: id.current++,
					check: false,
					toDo,
					time: new Date(),
					timing: timeDone,
				},
			]);
			setToDo("");
			setTiming("");
			let time = timeDone.getTime() - new Date().getTime();
			setSum((prev) => {
				return (prev += time);
			});
		}
	}
	const handleCheckSpan = useCallback((id) => {
		setArray(
			array.map((check) => {
				if (check.id === id) {
					check.check = true;
				}
				return check;
			})
		);
	});
	function handleChecked(id) {
		setArray(
			array.map((check) => {
				if (check.id === id) {
					check.check = event.target.checked;
				}
				return check;
			})
		);
	}
	const handleDelete = (arr) => {
		setArray(array.filter((del) => del.id !== arr.id));
		let time = arr.timing.getTime() - arr.time.getTime();
		setSum((prev) => {
			return (prev -= time);
		});
	};
	function handleDeleteCheck() {
		setArray(array.filter((arr) => arr.check !== true));
	}
	function handleDeleteAll() {
		setArray([]);
		setSum(0);
	}
	return (
		<div>
			<h1>To Do List Something...</h1>
			<div>
				<input
					value={toDo}
					placeholder="Do something..."
					type="text"
					onChange={(e) => {
						setToDo(e.target.value);
					}}
				/>
				<input
					value={timing}
					step={2}
					type="datetime-local"
					onChange={(e) => {
						setTiming(e.target.value);
					}}
				/>
				<button type="button" onClick={handleClickAdd}>
					Add
				</button>
				<button onClick={handleDeleteCheck}>Delete Check Done</button>
				<button onClick={handleDeleteAll}>Delete All</button>
			</div>
			<div>
				<ul>
					{!array.length
						? "Don't have To Do"
						: array.map((arr) => (
								<li key={arr.id}>
									<input
										type="checkbox"
										onClick={() => handleChecked(arr.id)}
									/>
									<span
										style={{
											textDecoration: arr.check ? "line-through" : "none",
										}}
									>
										{" "}
										Do: {arr.toDo}{" "}
									</span>
									<span
										style={{
											textDecoration: arr.check ? "line-through" : "none",
										}}
									>
										{" "}
										from {arr.time.toLocaleString()}{" "}
									</span>
									<span
										style={{
											textDecoration: arr.check ? "line-through" : "none",
										}}
									>
										{" "}
										to {arr.timing.toLocaleString()}{" "}
									</span>
									<button type="button" onClick={() => handleDelete(arr)}>
										Delete
									</button>
									<Timer
										onClick={() => handleCheckSpan(arr.id)}
										dateComplete={arr.timing}
									/>
								</li>
						  ))}
				</ul>
			</div>
			<div>
				<SumTimer sumCountDown={sum}></SumTimer>
			</div>
		</div>
	);
}
export default App;
