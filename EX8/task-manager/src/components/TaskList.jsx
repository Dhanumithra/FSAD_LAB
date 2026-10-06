import TaskItem from './TaskItem';

// Function Component connecting parent (App) and child (TaskItem)
// Displays components one by one
function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <div className="empty-state">No tasks available. Add one above!</div>;
  }

  return (
    <div className="task-list">
      <h3>Your Tasks</h3>
      <div className="task-container">
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggle={onToggle} 
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
