import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUsers, FaUserShield, FaUserCheck } from "react-icons/fa";

const Step4 = ({ prevStep, nextStep }) => {
  const [selectedOption, setSelectedOption] = useState("Admins");

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50 shadow">
        <h4>Who Can Manage Projects?</h4>
        <p className="text-muted">Customize access permissions in settings.</p>

        <div className="d-flex flex-column gap-2">
          {[
            { name: "Everyone", icon: <FaUsers />, desc: "All users can view, but guests cannot access." },
            { name: "Admins", icon: <FaUserShield />, desc: "Only admins can manage everything." },
            { name: "Specific People", icon: <FaUserCheck />, desc: "Only selected users can access." },
          ].map((item) => (
            <div
              key={item.name}
              className={`border p-3 rounded-3 d-flex align-items-center gap-2 cursor-pointer ${
                selectedOption === item.name ? "border-primary shadow-sm" : "border-secondary"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedOption(item.name)}
            >
              <div className="fs-4">{item.icon}</div>
              <div>
                <strong>{item.name}</strong>
                <p className="text-muted m-0" style={{ fontSize: "0.9rem" }}>
                  {item.desc}
                </p>
              </div>
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

export default Step4;
