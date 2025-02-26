import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaThList, FaColumns } from "react-icons/fa";

const Step3 = ({ prevStep, nextStep }) => {
  const [selectedView, setSelectedView] = useState("Board");

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50 shadow">
        <h4>Select View</h4>
        <p className="text-muted">Choose a preferred layout for your project.</p>

        <div className="d-flex justify-content-center gap-3">
          {[
            { name: "List", icon: <FaThList size={40} /> },
            { name: "Board", icon: <FaColumns size={40} /> },
          ].map((view) => (
            <div
              key={view.name}
              className={`border p-3 rounded-3 cursor-pointer ${
                selectedView === view.name ? "border-primary shadow-sm" : "border-secondary"
              }`}
              style={{ width: "120px", cursor: "pointer" }}
              onClick={() => setSelectedView(view.name)}
            >
              {view.icon}
              <p className="mt-2 mb-0">{view.name}</p>
            </div>
          ))}
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

export default Step3;
