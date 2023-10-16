import React, { useState } from "react";
import "./styles.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTaskIndex, setEditingTaskIndex] = useState(-1);

  const addTask = (task) => {
    setTasks([...tasks, { task, completed: false }]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const startEditingTask = (index) => {
    setEditingTaskIndex(index);
  };

  const cancelEditingTask = () => {
    setEditingTaskIndex(-1);
  };

  const editTask = (index, newTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].task = newTask;
    setTasks(updatedTasks);
    setEditingTaskIndex(-1);
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TodoForm addTask={addTask} />
      <Todos
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        startEditingTask={startEditingTask}
        editingTaskIndex={editingTaskIndex}
        editTask={editTask}
        cancelEditingTask={cancelEditingTask}
      />
    </div>
  );
}

export default App;
