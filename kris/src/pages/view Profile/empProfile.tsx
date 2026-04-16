import { useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/empProfile.css";
import Profile2 from "../view Profile/profile2";
import Education2 from "../view Profile/Education2";
import NextOfKin2 from "../view Profile/NextOfkin2";
import Contact2 from "../view Profile/contact2";
import Guarantor2 from "./guarantor2";
import FamilyDetails2 from "./familyDetails2";
import JobDetails2 from "./jobDetails2";
import FinancialDetails2 from "./financial2";

const EmployeeProfile = () => {
  const { id: _ } = useParams();
  const [activeTab, setActiveTab] = useState("personal");

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return <Profile2 />;
      case "contact":
        return <Contact2/>;
      case "kin":
        return <NextOfKin2/>;
      case "education":
        return <Education2/>;
      case "guarantor":
        return <Guarantor2 />;
      case "familyDetails":
        return <FamilyDetails2 />;
      case "jobDetails":
        return <JobDetails2 />;
      case "financial":
        return <FinancialDetails2 />;
      default:
        return <Profile2 />;
    }
  };

  return (
    <div className="profile-container">

      {/* LEFT SIDEBAR */}
      <div className="profile-sidebar">
        <button onClick={() => setActiveTab("personal")} className={activeTab === "personal" ? "active" : ""}>
          Personal Details
        </button>

        <button onClick={() => setActiveTab("contact")} className={activeTab === "contact" ? "active" : ""}>
          Contact Details
        </button>

        <button onClick={() => setActiveTab("kin")} className={activeTab === "kin" ? "active" : ""}>
          Next of kin Details
        </button>


        <button onClick={() => setActiveTab("education")} className={activeTab === "education" ? "active" : ""}>
          Education Qualifications
        </button>

        <button onClick={() => setActiveTab("guarantor")} className={activeTab === "guarantor" ? "active" : ""}>
          Guarantor Details
        </button>

        <button onClick={() => setActiveTab("familyDetails")} className={activeTab === "familyDetails" ? "active" : ""}>
          Family Details
        </button>

        <button onClick={() => setActiveTab("jobDetails")} className={activeTab === "jobDetails" ? "active" : ""}>
          Job Details
        </button>

        <button onClick={() => setActiveTab("financial")} className={activeTab === "financial" ? "active" : ""}>
          Financial Details
        </button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="profile-content">
        {renderContent()}
      </div>

    </div>
  );
};

export default EmployeeProfile;