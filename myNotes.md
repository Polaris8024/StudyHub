Props
    React props work similar to Javascript functions with parameters. The parent component supplies values, and the child component receives them.
    For example, in App.jsx (parent) the title="StudyHub" and the subtitle="Student Productivity Dashboard". 
    Header.jsx (child) receives the title and subtitle and displays them using JSX.
useState
    regular JS similar to let currentView="dash";. Changing just that variable does not tell React to update the screen. React soves with useStat: const [currentView, setCurrentView] = useState("dashboard");
currentView: stores the currently selected view

setCurrentView: function that updates the state

"dashboard" initial value

useState(): React Hook that manages the state.

The ? means "if the condition is true," and the : means "otherwise."
React displays only the appropriate view based on the state value.

currentView: Switches between Dashboard and About

tasks: Stores the task array

App.jsx owns tasks and currentView state
    Header = component
    TaskList = recieves tasks
        TaskItem.jsx= receives one task prop
    About = component
    