import React from "react";
import Todo from "./Todo";

function Todos({
  tasks,
  toggleComplete,
  deleteTask,
  startEditingTask,
  editingTaskIndex,
  editTask,
  cancelEditingTask
}) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Todo
          key={index}
          task={task.task}
          completed={task.completed}
          toggleComplete={() => toggleComplete(index)}
          deleteTask={() => deleteTask(index)}
          startEditingTask={() => startEditingTask(index)}
          index={index}
          isEditing={index === editingTaskIndex}
          editTask={(newTask) => editTask(index, newTask)}
          cancelEditingTask={cancelEditingTask}
        />
      ))}
    </div>
  );
}

export default Todos;
