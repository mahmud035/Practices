import React, { useState } from 'react';

const Task = ({ todo, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) => {
            onChange({
              ...todo,
              done: e.target.checked,
            });
          }}
        />
        {todoContent}
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </label>
    </div>
  );
};

export default Task;
