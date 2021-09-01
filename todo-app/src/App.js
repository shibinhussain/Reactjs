import { useState } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

function App() {
  const [state, setState] = useState([
    { id: 1, content: 'do some workout' },
    { id: 2, content: 'play mario kart' },
  ]);
  const deleteTodo = (id) => {
    const todos = state.filter((todo) => {
      return todo.id !== id;
    });
    setState(todos);
  };

  const addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...state,todo]
    setState(todos)
  };
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={state} onDelete={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
