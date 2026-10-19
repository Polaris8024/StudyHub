function TaskItem({ task }) {
    return (
        <article className="task-card">
            <h3>{task.title}</h3>

            <p>
                Status: {task.completed ? "Completed" : "Pending"}
            </p>
        </article>
    );
}

export default TaskItem;

//TaskItem receives one task through props
//can show an example of conditional rendering