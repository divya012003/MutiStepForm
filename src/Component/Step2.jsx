import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Step2 = ({ prevStep, nextStep }) => {
  const [projectType, setProjectType] = useState("Time & Materials");
  const [hourlyRate, setHourlyRate] = useState("₹12,678.00");
  const [budgetReset, setBudgetReset] = useState(false);
  const [emailAlert, setEmailAlert] = useState(true);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50 shadow">
        <h3 className="text-center">Project Type</h3>
        <div className="d-flex mb-3">
          {["Time & Materials", "Fixed Fee", "Non-Billable"].map((type) => (
            <button
              key={type}
              className={`btn flex-fill ${
                projectType === type ? "btn-primary" : "btn-light"
              }`}
              onClick={() => setProjectType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <h6>Hourly</h6>
        <div className="d-flex gap-2 mb-3">
          <select className="form-select">
            <option>Project Hourly Rate</option>
          </select>
          <input
            type="text"
            className="form-control"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
          />
        </div>

        <h6>Budget</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={budgetReset}
            onChange={() => setBudgetReset(!budgetReset)}
          />
          <label className="form-check-label">Budget resets every month</label>
        </div>

        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            checked={emailAlert}
            onChange={() => setEmailAlert(!emailAlert)}
          />
          <label className="form-check-label">Send email alerts</label>
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-light" onClick={prevStep}>
            ← Back
          </button>
          <button className="btn btn-primary" onClick={nextStep}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
