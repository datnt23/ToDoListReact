import { useStore, actions } from "./store";
import { useEffect, useRef } from "react";
import "./App.css";
import { checkedToDo, deleteToDo } from "./store/actions";
function App() {
	const [state, dispatch] = useStore();
	const { arrayToDo, toDo } = state;
	const inputRef = useRef();
	useEffect(() => {
		localStorage.setItem("arrayToDo", JSON.stringify(arrayToDo));
	}, [arrayToDo]);
	const handleAdd = () => {
		dispatch(actions.addToDo(toDo));
		dispatch(actions.setToDo(""));
		inputRef.current.focus();
	};
	const handleDeleteAllToDo = () => {
		dispatch(actions.deleteAllToDo());
	};
	return (
		<div>
			<h1>To Do List Something...</h1>
			<div>
				<input
					ref={inputRef}
					value={toDo}
					type="text"
					placeholder="Enter your to do..."
					onChange={(todo) => {
						dispatch(actions.setToDo(todo.target.value));
					}}
				/>
				<button onClick={handleAdd}>Add</button>
				<button>Delete All Checked</button>
				<button onClick={handleDeleteAllToDo}>Delete All To Do</button>
			</div>
			<div>
				<ul>
					{!arrayToDo.length
						? "Don't Have To Do Something!"
						: arrayToDo.map((toDos, index) => (
								<li key={index}>
									<input
										type="checkbox"
										onClick={() => dispatch(checkedToDo(index))}
									/>
									<span> {toDos} </span>
									<button onClick={() => dispatch(deleteToDo(index))}>
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
