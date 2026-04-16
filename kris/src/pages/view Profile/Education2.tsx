import { useState } from "react";
import "../../styles/Education2.css";
import EducationForm2 from "../view Profile/EducationForm2";

const Education = () => {
  const [view, setView] = useState<"list" | "form">("list");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  
  const academicRecords = [
    {
      institution: "Leicester University",
      degree: "B.Sc in Computer Science",
      duration: "May 2014 - May 2018"
    },
    {
      institution: "English College",
      degree: "WASSCE",
      duration: "February 2006 - June 2012"
    }
  ];

  const professionalQualifications = [
    {
      title: "CCNA Certification",
      org: "New Horizons",
      duration: "May 2019 - September 2021"
    },
    {
      title: "Google UI / UX Certification",
      org: "Google Inc",
      duration: "September 2021 - September 2022"
    },
    {
      title: "Web Developer",
      org: "Google Inc",
      duration: "May 2019 - September 2021",
      desc: "Collaborated with teammates to deliver valuable features meeting business and customer needs."
    }
  ];

    const handleClick = (item: any) => {
    console.log("Clicked item:", item);
    setSelectedItem(item);
    setView("form");
  };

  return (
    <div className="edu-container">
      {view === "list" ? (
        <>
      
      {/* Academic Records */}
      <h3 className="section-title">Academic Records</h3>

      {academicRecords.map((item, index) => (
        <div className="edu-card" key={index}
          onClick={() => handleClick(item)}>
          <h4>{item.institution}</h4>
          <p>{item.degree}</p>
          <span>{item.duration}</span>
        </div>
      ))}

      {/* Professional Qualifications */}
      <h3 className="section-title">Professional Qualifications</h3>

      {professionalQualifications.map((item, index) => (
        <div className="edu-card" key={index}
          onClick={() => handleClick(item)}>
          <h4>{item.title}</h4>
          <p>at {item.org}, {item.duration}</p>

          {item.desc && (
            <ul>
              <li>{item.desc}</li>
            </ul>
          )}
        </div>
      ))}
      </>
      ) : (
         <EducationForm2
          data={selectedItem}
          onBack={() => setView("list")}
        />
      )}
    </div>
  );
};

export default Education;