import React from "react";
import "../styles/sidebar2.css";

type Props = {
  active: string;
  onSelect: (key: string) => void;
};

const Sidebar: React.FC<Props> = ({ active, onSelect }) => {
  return (
    <div className="sidebar">

      <button
        className={`sidebar-btn ${active === "personal" ? "active" : ""}`}
        onClick={() => onSelect("personal")}
      >
        Personal Details
      </button>

      <button
        className={`sidebar-btn ${active === "contact" ? "active" : ""}`}
        onClick={() => onSelect("contact")}
      >
        Contact Details
      </button>

      <button
        className={`sidebar-btn ${active === "kin" ? "active" : ""}`}
        onClick={() => onSelect("kin")}
      >
        Next of kin Details
      </button>

      <button
        className={`sidebar-btn ${active === "education" ? "active" : ""}`}
        onClick={() => onSelect("education")}
      >
        Education Qualifications
      </button>

      <button
        className={`sidebar-btn ${active === "guarantor" ? "active" : ""}`}
        onClick={() => onSelect("guarantor")}
      >
        Guarantor Details
      </button>

      <button
        className={`sidebar-btn ${active === "familyDetails" ? "active" : ""}`}
        onClick={() => onSelect("familyDetails")}
      >
        Family Details
      </button>

      <button
        className={`sidebar-btn ${active === "jobDetails" ? "active" : ""}`}
        onClick={() => onSelect("jobDetails")}
      >
        Job Details
      </button>

      <button
        className={`sidebar-btn ${active === "financial" ? "active" : ""}`}
        onClick={() => onSelect("financial")}
      >
        Financial Details
      </button>

    </div>
  );
};

export default Sidebar;