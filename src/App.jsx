import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <h1>React TODO App</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <TodoList />
    </div>
  );
}

export default App;
