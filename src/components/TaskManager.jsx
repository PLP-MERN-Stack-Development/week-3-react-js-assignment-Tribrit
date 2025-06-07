// src/components/TaskManager.jsx
import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./Button";
import Card from "./Card";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
  });

  return (
    <Card>
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>

      <div className="flex mb-4 space-x-2">
        <input
          type="text"
          className="flex-grow border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="mb-4 space-x-2">
        <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>
          All
        </Button>
        <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")}>
          Active
        </Button>
        <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")}>
          Completed
        </Button>
      </div>

      <ul>
        {filteredTasks.length === 0 && <li className="text-gray-500">No tasks here.</li>}

        {filteredTasks.map(({ id, text, completed }) => (
          <li
            key={id}
            className="flex justify-between items-center mb-2 p-2 bg-gray-100 dark:bg-gray-800 rounded"
          >
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleComplete(id)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className={completed ? "line-through text-gray-500" : ""}>{text}</span>
            </label>

            <Button variant="danger" onClick={() => deleteTask(id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
