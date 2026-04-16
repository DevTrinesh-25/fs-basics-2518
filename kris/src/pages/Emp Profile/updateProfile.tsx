import { useState } from "react";
import Sidebar2 from "../../Components/sidebar2";
import Profile from "../Emp Profile/profile";
import "../../styles/profile.css";
import Navbar2 from "../../Components/Navbar2";
import Contact from "../Emp Profile/contact"
import NextOfKin from "../Emp Profile/Nextofkin";
import Education from "../Emp Profile/Education";
import Guarantor from "../Emp Profile/guarantor";
import FamilyDetails from "../Emp Profile/familyDetails";
import JobDetails from "../Emp Profile/jobDetails";
import FinancialDetails from "../Emp Profile/financial";


const UpdateProfile = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const renderContent = () => {
    
    switch (activeTab) {
      case "personal":
        return <Profile />;
      case "contact":
        return <Contact/>;
      case "kin":
        return <NextOfKin/>;
      case "education":
        return <Education/>;
      case "guarantor":
        return <Guarantor />;
      case "familyDetails":
        return <FamilyDetails />;
      case "jobDetails":
        return <JobDetails />;
      case "financial":
        return <FinancialDetails />;
      default:
        return <Profile />;
    }
  };

  return (   
    <div className="container">
      <Sidebar2 active={activeTab} onSelect={setActiveTab} />
      <div className="main-section">
        <Navbar2/>
      <div className="content">{renderContent()}</div>
     </div>
    </div>
  );
};

export default UpdateProfile;

// import { useNavigate } from "react-router-dom";
// // import { useState } from "react";
// import Sidebar2 from "../../Components/sidebar2";
// // import Profile from "../Emp Profile/profile";
// import "../../styles/profile.css";
// import Navbar2 from "../../Components/Navbar2";

// const UpdateProfile = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="container">
//       <Sidebar2
//         active="personal"
//         onSelect={(tab: string) => {
//           if (tab === "personal") navigate("/profile");
//           if (tab === "contact") navigate("/contact");
//           if (tab === "education") navigate("/education");
//         }}
//       />

//       <div className="main-section">
//         <Navbar2 />
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;
