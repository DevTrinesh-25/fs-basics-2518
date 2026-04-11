// import { useState, useEffect } from "react";
// import EducationForm from "../Emp Profile/EducationForm";
// // import { data } from "react-router-dom";

// const Education = () => {
//   const [view, setView] = useState("list");
//   const [selected, setSelected] = useState(null);

// const [data, setData] = useState<any>({
//   academicRecords: [],
//   professionalQualifications: []
// });

// useEffect(() => {
//   fetch("http://localhost:4000/education")
//     .then(res => res.json())
//     .then(resData => setData(resData));
// }, []);

//   const handleEdit = (item: any) => {
//     setSelected(item);
//     setView("form");
//   };

//   return (
//     <div className="form-container">
//         <Sidebar2 />
//       {view === "list" ? (
//         <>
//           <h3>Academic Records</h3>

//           {data.academicRecords.map((item: any) => (
//             <div className="card" key={item.id}>
//                 <h4>{item.institution}</h4>
//                 <p>{item.degree}</p>
//                 <span>{item.startDate} - {item.endDate}</span>
//             </div>
//             ))}
       

//                     <h3>Professional Qualifications</h3>

//             {data.professionalQualifications.map((item: any) => (
//             <div className="card" key={item.id}>
//                 <h4>{item.title}</h4>
//                 <p>{item.organization}</p>
//                 <span>{item.startDate} - {item.endDate}</span>

//                 {item.description && <p>{item.description}</p>}
//             </div>
//             ))}

//         </>
//       ) : (
//         <EducationForm
//           data={selected}
//           onBack={() => setView("list")}
//         />
//       )}
//     </div>
//   );
// };

// export default Education;

import { useState } from "react";
import "../../styles/Education.css";
import EducationForm from "../Emp Profile/EducationForm";


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
          onClick={() => handleClick(item)}
          style={{ cursor: "pointer" }}>
          <h4>{item.institution}</h4>
          <p>{item.degree}</p>
          <span>{item.duration}</span>
        </div>
      ))}

      {/* Professional Qualifications */}
      <h3 className="section-title">Professional Qualifications</h3>

      {professionalQualifications.map((item, index) => (
        <div className="edu-card" key={index}
          onClick={() => handleClick(item)}
          style={{ cursor: "pointer" }}>
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
         <EducationForm
          data={selectedItem}
          onBack={() => setView("list")}
        />
      )}
    </div>
  );
};

export default Education;