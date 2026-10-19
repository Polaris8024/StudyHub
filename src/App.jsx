import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {

    const appTitle = "StudyHub";
    const appSubtitle = "Student Productivity Dashboard";

    // State for switching between Dashboard and About
    const [currentView, setCurrentView] = useState("dashboard");

    // State for storing tasks
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Finish React assignment",
            completed: false
        },
        {
            id: 2,
            title: "Review JavaScript notes",
            completed: true
        },
        {
            id: 3,
            title: "Submit statistics homework",
            completed: false
        }
    ]);

    // Function for adding new tasks
    function addTask(title) {

        const newTask = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        };

        setTasks((previousTasks) => [
            ...previousTasks, //spread operator. preserves the existing tasks while adding the new one. 
            newTask
        ]); //receives the task name from the form, creates a task object, and adds it to the existing array.
    }

    return (
        <div className="app">

            <Header
                title={appTitle}
                subtitle={appSubtitle}
            />

            <nav className="navigation">
                <button
                    type="button"
                    onClick={() => setCurrentView("dashboard")}
                >
                    Dashboard
                </button>

                <button
                    type="button"
                    onClick={() => setCurrentView("about")}
                >
                    About
                </button>
            </nav>

            <main>
                {currentView === "dashboard" ? (
                    <>
                        <TaskForm onAddTask={addTask} />

                        <TaskList tasks={tasks} />
                    </>
                ) : (
                    <About />
                )}
            </main>

        </div>
    );
}

export default App;