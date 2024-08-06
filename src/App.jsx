import { useStore, actions } from "./store";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import { checkedToDo, deleteToDo } from "./store/actions";
import Timer from "./AppTodoList/Timer";
import SumTimer from "./AppTodoList/SumTimer";
function App() {
  const [state, dispatch] = useStore();
  const { arrayToDo } = state;
  const inputRef = useRef();
  const id = useRef(0);
  const [timing, setTiming] = useState("");
  const [toDo, setToDo] = useState("");
  const [sum, setSum] = useState(0);

  useEffect(() => {
    localStorage.setItem("arrayToDo", JSON.stringify(arrayToDo));
  }, [arrayToDo]);

  const handleAdd = () => {
    let timeDone = new Date(timing);
    if (toDo === "") {
      alert("Enter your to do something!");
    } else if (timing === "" || timeDone.getTime() < new Date().getTime()) {
      alert("Enter your time to done!");
    } else {
      dispatch(actions.addToDo({ do: toDo, id: id.current++, time: timeDone }));
      setToDo("");
      setTiming("");
      let time = timeDone.getTime() - new Date().getTime();
      setSum((prev) => {
        return (prev += time);
      });
      inputRef.current.focus();
    }
  };

  const handleDeleteAllToDo = () => {
    dispatch(actions.deleteAllToDo());
  };

  const handleDeleteAllChecked = () => {
    dispatch(actions.deleteAllToDoChecked());
  };

  console.log(arrayToDo);
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
            setToDo(todo.target.value);
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
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleDeleteAllChecked}>Delete All Checked</button>
        <button onClick={handleDeleteAllToDo}>Delete All To Do</button>
      </div>
      <div>
        <ul>
          {!arrayToDo.length
            ? "Don't Have To Do Something!"
            : arrayToDo.map((obj) => (
                <li key={obj.id}>
                  <input
                    type="checkbox"
                    onClick={() => {
                      dispatch(checkedToDo(obj.id));
                    }}
                  />
                  <span
                    style={{
                      textDecoration: obj.isChecked ? "line-through" : "none",
                      paddingLeft: "6px",
                      paddingRight: "12px",
                    }}
                  >
                    {obj.toDo}
                  </span>
                  <span
                    style={{
                      textDecoration: obj.check ? "line-through" : "none",
                    }}
                  >
                    {" "}
                    from {obj.time.toLocaleString()}{" "}
                  </span>
                  <span
                    style={{
                      textDecoration: obj.check ? "line-through" : "none",
                    }}
                  >
                    {" "}
                    to {obj.timing.toLocaleString()}{" "}
                  </span>
                  <button onClick={() => dispatch(deleteToDo(obj.id))}>
                    Delete
                  </button>
                  <Timer
                    onClick={() => checkedToDo(obj.id)}
                    dateComplete={obj.timing}
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
