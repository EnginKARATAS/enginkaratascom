import { useState } from "react";

export default function FeatureComponent() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Create todo app", completed: false },
        { id: 2, text: "Style the app", completed: false }
    ]);
    const [inputValue, setInputValue] = useState("");

    const addTask = (text) => {
        if (text.trim()) {
            setTasks([...tasks, { id: Date.now(), text, completed: false }]);
            setInputValue("");
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="todo-app">
            <h1>My Todo List</h1>
            <div className="add-task">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new task"
                    onKeyPress={(e) => e.key === "Enter" && addTask(inputValue)}
                />
                <button onClick={() => addTask(inputValue)}>Add</button>
            </div>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? "completed" : ""}>
                        <span onClick={() => toggleTask(task.id)}>{task.text}</span>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
