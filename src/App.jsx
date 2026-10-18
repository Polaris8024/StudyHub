import "./App.css";
import Header from "./components/Header"; // imports the componenet

function App() {

  return(
    <div className="app">
      <Header /> 

      <main>
        <h2>Welcome to StudyHub</h2>
        <p>Manage your tasks and track your progress</p>
      </main>
    </div>
  );
}

export default App;

//Parent & Child hierarchy. App.jsx is the parent component and Header.jsx is the child. App.jsx will manage the shared state and pass information down to other components using props.