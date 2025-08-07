import React from 'react'
const TodoList = ({ todolist, deleteHandler }) => {
  return (
    <div>
      {todolist.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        todolist.map((todo, index) => (
          <div key={index} className="todo-item">
            <span className="task-text">{todo}</span>
              <button onClick={() => deleteHandler(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;

