// Function Component with Props (Receives task object and callback functions)
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <h4 className="task-title">{task.name}</h4>
        {task.desc && <p className="task-desc">{task.desc}</p>}
      </div>
      <div className="task-actions">
        <button 
          className={`btn-toggle ${task.completed ? 'btn-undo' : 'btn-complete'}`}
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="btn-delete" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
