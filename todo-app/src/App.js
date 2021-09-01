import { useState } from 'react';
import Todos from './Todos';

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

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <p>
        <Todos todos={state} onDelete={deleteTodo} />
      </p>
    </div>
  );
}

export default App;
