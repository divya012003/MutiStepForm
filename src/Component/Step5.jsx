import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Step5 = ({ nextStep, prevStep }) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    "Marketing Website Design",
    "Branding Design",
    "UI/UX Fundamentals",
    "Wireframe and Prototyping",
    "Style Guide",
    "UX Research and Flows",
    "Layout design",
  ]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const addTask = () => {
    if (task.trim() && !tasks.includes(task)) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const toggleTask = (taskName) => {
    if (selectedTasks.includes(taskName)) {
      setSelectedTasks(selectedTasks.filter((t) => t !== taskName));
    } else {
      setSelectedTasks([...selectedTasks, taskName]);
    }
  };
  function showPopup() {
    ("Hello! This is your popup message.");
}

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50 shadow">
        <h4 className="text-center mb-3">Manage Your Tasks</h4>
        
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTask}>
            Add Task
          </button>
        </div>

        <ul className="list-group mb-3">
          {tasks.map((t, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={selectedTasks.includes(t)}
                  onChange={() => toggleTask(t)}
                />
                {t}
              </label>
              <button className="btn btn-danger btn-sm" onClick={() => setTasks(tasks.filter((task) => task !== t))}>
                ✖
              </button>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-light" onClick={prevStep}>← Back</button>
            <button type="submit" className="btn btn-danger" onSubmit={showPopup()}>Submit</button>
          </div>
      </div>
      
    </div>
  );
};

export default Step5;
