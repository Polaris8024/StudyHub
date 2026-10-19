import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
    return (
        <section className="task-list">
            <h2>My Tasks</h2>

            {tasks.map(function(task) {
                return (
                    <TaskItem
                        key={task.id}
                        task={task}
                    />
                );
            })}
        </section>
    );
}

export default TaskList;
// .map() will turn each task object into a React component.