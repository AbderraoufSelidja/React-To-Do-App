const Task = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.isCompleted ? "green" : "white" }}
    >
      <h3>{props.taskName}</h3>
      <div>
        <button
          className="completed"
          onClick={() => props.handleCompleted(props.taskId)}
        >
          Completed
        </button>
        <button
          className="delete"
          onClick={() => props.handleRemove(props.taskId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export { Task };
