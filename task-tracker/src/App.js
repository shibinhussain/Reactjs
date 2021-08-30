import Header from './components/Header';
import { useState } from 'react';

import Tasks from './components/Tasks';
import { FaLevelDownAlt, FaLyft } from 'react-icons/fa';

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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id
        ? { ...task, reminder: !task.reminder }
        : task
    ));
  };

  return (
    <div className="container">
      <Header title="Task tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  );
}

export default App;
