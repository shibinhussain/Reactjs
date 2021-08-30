import Header from './components/Header';
import { useState } from 'react';

import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Sep 5th at 2.30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Sep 6th at 1.30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Shopping',
      day: 'Sep 5th at 2.30pm',
      reminder: false,
    },
  ]);
  return (
    <div className="container">
      <Header title="Task tracker" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
