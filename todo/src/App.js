import './App.css';
import Todos from './components/Todos';

function App() {
  const state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Meeting with Boss',
        completed: false,
      },
      {
        id: 3,
        title: 'Trip with friends',
        completed: false,
      },
    ],
  };

  const markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  } ;

  return (
    <div className="App">
      <Todos todos={state.todos} markComplete={markComplete} />
    </div>
  );
}

export default App;
