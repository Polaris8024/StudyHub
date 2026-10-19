import { useState } from "react";
import "./App.css";

import Header from "./components/Header"; // imports the componenet
import About from "./components/About"; //import the about section from components



function App() {
  const appTitle = "StudyHub";
  const appSubtitle = "Student Productivity Dashboard";

  const [currentView, setCurrentView] = useState("dashboard"); //Creates state

  return(
    <div className="app">
      <Header
          title={appTitle}
          subtitle={appSubtitle} //passes 2 values from App to Header.
       />  

       <nav className="navigation">
        <button
          onClick={() => setCurrentView("dashboard")} //changes the state to dashboard
          >
            Dashboard
          </button>

          <button
            onClick={() => setCurrentView("about")} //changew the state to about
            >
              About
            </button>

       </nav>
      <main>
                {currentView === "dashboard" ? (
                    <section>
                        <h2>Welcome to StudyHub</h2>
                        <p>
                            Manage your tasks and track your progress.
                        </p>
                    </section>
                ) : (
                    <About />
                )}
            </main>

        </div>
    );
}

export default App;