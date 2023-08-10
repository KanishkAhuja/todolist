import { useState } from "react";
import "../App.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [modifiedTaskIndex, setModifiedTaskIndex] = useState(-1);

  const handleTaskAdd = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleTaskRemove = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleTaskModify = (e, index) => {
    const updatedTasks=[...tasks];
    updatedTasks[index] = e.target.value;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add" onClick={handleTaskAdd}>
          Add
        </button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {index === modifiedTaskIndex ? (
                <><input
                type="text"
                placeholder="Modify task"
                value={task}
                onChange={(e) => handleTaskModify(e, index)}
              />
              <button className="add" onClick={() => setModifiedTaskIndex(-1)}>
                Save
              </button>
              </>
              ) : (
                <>
                  <div className="listItem"><p>{task}</p></div>
                  <button className="delete" onClick={() => handleTaskRemove(index)}>
                    Remove
                  </button>
                  <button className="delete" onClick={() => setModifiedTaskIndex(index)}>
                    Modify
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;


