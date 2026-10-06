import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  // Function Component with state
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Learn React Props', desc: 'Understand how to pass data between components', completed: true },
    { id: 2, name: 'Learn React State', desc: 'Understand useState hook for managing component memory', completed: false },
    { id: 3, name: 'Connect Components', desc: 'Pass data and functions from Parent to Child', completed: false }
  ]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Task Master</h1>
        <p>EX-8: A simple demonstration of React Props and State</p>
      </header>
      
      <main className="app-main">
        {/* Display components one by one */}
        <section className="component-section form-section">
          <TaskForm onAddTask={handleAddTask} />
        </section>
        
        <section className="component-section list-section">
          <TaskList 
            tasks={tasks} 
            onToggle={handleToggleTask} 
            onDelete={handleDeleteTask} 
          />
        </section>
      </main>
    </div>
  );
}

export default App;
