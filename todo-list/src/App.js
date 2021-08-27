import './App.css';
import Todos from './components/Todos';

function App() {
  const state ={
    todos:[
      {
        id: 1,
        title:'Take out the trash',
        completed:false
      },
      {
        id: 2,
        title:'Meeting with Boss',
        completed:true
      },
      {
        id: 3,
        title:'Trip with friends',
        completed:false
      }
    ]
  }
  return (
    <div className="App">
      <Todos todos={state.todos}/>
    </div>
  );
}

export default App;
