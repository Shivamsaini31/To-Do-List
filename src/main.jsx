import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import GetNewTask from "./components/newTask.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Heading from "./components/heading.jsx";

function App() {
  const [items, setItems] = useState([
    {
      toDo: "Code!",
      Date: "2025-08-24",
    },
    {
      toDo: "DSA!",
      Date: "2025-08-24",
    },
    {
      toDo: "DEV!",
      Date: "2025-08-24",
    },
  ]);

  const handleDelete = (index) => {
    setItems((it) => it.filter((_, i) => i !== index));
  };

  const handleAddTask = (newTask, taskDate) => {
    setItems((i) => [...i, { toDo: newTask, Date: taskDate }]);
  };

  return (
    <div
      className="container"
      style={{
        maxWidth: "800px",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        borderRadius: "20px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        padding: "30px",
        border: "1px solid rgba(16, 185, 129, 0.3)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Heading taskCount={items.length} />
      <GetNewTask
        items={items}
        onAddTask={handleAddTask}
        onDeleteTask={handleDelete}
      />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
