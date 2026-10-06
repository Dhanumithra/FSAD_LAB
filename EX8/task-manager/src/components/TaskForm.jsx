import { useState } from 'react';

// Function Component with State (all available options: useState hook)
// Props: receives onAddTask function
function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    onAddTask({ id: Date.now(), name: taskName, desc: taskDesc, completed: false });
    setTaskName('');
    setTaskDesc('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h3>Add a New Task</h3>
      <div className="form-group">
        <label>Task Name</label>
        <input 
          type="text" 
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
          placeholder="What needs to be done?"
        />
      </div>
      <div className="form-group">
        <label>Description (Optional)</label>
        <input 
          type="text" 
          value={taskDesc} 
          onChange={(e) => setTaskDesc(e.target.value)} 
          placeholder="Additional details..."
        />
      </div>
      <button type="submit" className="btn-primary">Add Task</button>
    </form>
  );
}

export default TaskForm;
