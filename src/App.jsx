import { useState, useEffect } from "react";
import "./App.css";
let id = 0;
function App() {
	const [toDo, setToDo] = useState("");
	const [timing, setTiming] = useState();
	const [array, setArray] = useState([]);
	useEffect(() => {
		localStorage.setItem("arr", JSON.stringify(array));
	}, [array]);
	function handleClickAdd() {
		const [hours, minutes] = timing.split(":");
		let date = new Date();
		date.setHours(hours);
		date.setMinutes(minutes);
		let timeDone = new Date(date);
		if (toDo === "") {
			alert("Enter your to do something!");
		} else if (timing === "" || timeDone.getTime() < new Date().getTime()) {
			alert("Enter your time to done!");
		} else {
			setArray([
				...array,
				{
					id: id++,
					check: false,
					doing: toDo,
					time: new Date(),
					timing: timeDone,
				},
			]);
			setToDo("");
		}
	}
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
	};
	function handleDeleteCheck() {
		setArray(array.filter((arr) => arr.check !== true));
	}
	function handleDeleteAll() {
		setArray([]);
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
					type="time"
					placeholder="Time"
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
										onChange={() => handleChecked(arr.id)}
									/>
									<span
										style={{
											textDecoration: arr.check ? "line-through" : "none",
										}}
									>
										{" "}
										Do: {arr.doing}{" "}
									</span>
									<span
										style={{
											textDecoration: arr.check ? "line-through" : "none",
										}}
									>
										{" "}
										from {arr.time.toLocaleTimeString()}{" "}
									</span>
									<span
										style={{
											textDecoration: arr.check ? "line-through" : "none",
										}}
									>
										{" "}
										to {arr.timing.toLocaleTimeString()}{" "}
									</span>
									<button type="button" onClick={() => handleDelete(arr)}>
										Delete
									</button>
								</li>
						  ))}
				</ul>
			</div>
		</div>
	);
}
export default App;
