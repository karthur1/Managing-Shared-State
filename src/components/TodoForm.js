import React, { useState } from "react";

function TodoForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default TodoForm;
