import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Step1({ prevStep, nextStep }) {
  const [formData, setFormData] = useState({
    projectName: "",
    client: "",
    startDate: "",
    endDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50 shadow">
        <h2 className="text-center fw-semibold mb-3">Create a project</h2>
        <form>
          <input
            type="text"
            name="projectName"
            className="form-control mb-3"
            placeholder="Enter project name here"
            value={formData.projectName}
            onChange={handleChange}
          />

          <div className="d-flex flex-column flex-sm-row gap-2 mb-3">
            <select
              name="client"
              className="form-select"
              value={formData.client}
              onChange={handleChange}
            >
              <option value="">Select a client</option>
              <option value="Client A">Omkar</option>
              <option value="Client B">Rahul</option>
            </select>
            <button type="button" className="btn btn-light border">
              + New Client
            </button>
          </div>

          <div className="d-flex flex-column flex-sm-row gap-2 mb-3">
            {["startDate", "endDate"].map((field, index) => (
              <div key={index} className="position-relative flex-fill">
                <FaCalendarAlt className="position-absolute top-50 start-10 translate-middle text-muted" />
                <input
                  type="date"
                  name={field}
                  className="form-control ps-4"
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          <textarea
            name="notes"
            className="form-control mb-3"
            placeholder="Optional"
            rows="3"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>

            <div className="d-flex justify-content-center mt-4">
            
            <button className="btn btn-primary" onClick={nextStep}>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}
