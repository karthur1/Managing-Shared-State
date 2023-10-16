import React, { useState } from "react";

function Todo({
  task,
  completed,
  toggleComplete,
  startEditingTask,
  isEditing,
  cancelEditingTask,
  deleteTask,
  editTask
}) {
  const [editText, setEditText] = useState(task);

  const handleEdit = () => {
    startEditingTask();
  };

  const handleSave = () => {
    editTask(editText);
    cancelEditingTask();
  };

  const handleCancel = () => {
    setEditText(task);
    cancelEditingTask();
  };

  return (
    <div className="song">
      <div className="song-details">
        <input type="checkbox" checked={completed} onChange={toggleComplete} />
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <p>
            <span
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </span>
          </p>
        )}
      </div>
      <div className="button-group">
        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete-button" onClick={deleteTask}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Todo;
