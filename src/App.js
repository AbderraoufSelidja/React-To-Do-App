import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { Task } from "./Task";
function App() {
  const [addTask, setAddTask] = useState([]);
  // A reference to the input field allows us to retrieve the value entered by the user.
  const inputRef = useRef();
  // Handle Adding new task
  function handleAdd() {
    if (inputRef.current.value !== "") {
      let task = {
        id: addTask.length === 0 ? 1 : addTask[addTask.length - 1].id + 1,
        name: inputRef.current.value,
        isCompleted: false,
      };
      setAddTask([...addTask, task]);
    }
  }

  // Handle Removing task
  let handleRemove = (taskId) => {
    setAddTask(addTask.filter((task) => task.id !== taskId));
  };
  let handleCompleted = (taskId) => {
    setAddTask(
      addTask.map(task => task.id === taskId ? {...task, isCompleted: !task.isCompleted}: task)
    );
  };
  return (
    <div className="App">
      <div className="addTask">
        <input type="text" ref={inputRef}></input>
        <button onClick={handleAdd} className="add">Add</button>
      </div>
      <div className="list">
        {addTask.map((task) => (
          <Task
            key={task.id}
            isCompleted={task.isCompleted}
            taskName={task.name}
            taskId={task.id}
            handleRemove={handleRemove}
            handleCompleted={handleCompleted}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
