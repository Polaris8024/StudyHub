function TaskItem({ task, onToggleTask }) {
    return (
        <article className="task-card">
            <h3>{task.title}</h3>

            <p>
                Status: {task.completed ? "Completed" : "Pending"}
            </p>
            <button
    type="button"
    onClick={() => onToggleTask(task.id)}
>
    {task.completed ? "Mark Pending" : "Mark Complete"}
</button>
        </article>
    );
}

export default TaskItem;

//TaskItem receives one task through props
//can show an example of conditional rendering