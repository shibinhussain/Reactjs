import React from 'react';

const Todos = ({ todos, onDelete }) => {
  const todoList = todos.map((todo) => {
    return (
      <div className="collection-item" key={todo.id}>
        <span
          onClick={() => {
            onDelete(todo.id);
          }}
        >
          {todo.content}
        </span>
      </div>
    );
  });

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
