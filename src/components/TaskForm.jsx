import { useState } from "react";

function TaskForm({ onAddTask }) {
    const [taskTitle, setTaskTitle] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (taskTitle.trim() === "") {
            return;
        }

        onAddTask(taskTitle.trim());
        setTaskTitle("");
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2>Add a New Task</h2>

            <label htmlFor="task-title">Task Name:</label>

            <input
                type="text"
                id="task-title"
                value={taskTitle}
                onChange={(event) =>
                    setTaskTitle(event.target.value) // In React, input is contolled by state. onChange updates taskTitle. reacht then displays the updated value in the input
                }
                placeholder="Enter a task"
            />

            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;