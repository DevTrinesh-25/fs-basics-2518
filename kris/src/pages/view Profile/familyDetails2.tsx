import "../../styles/FamilyDetails2.css";
import { useState } from "react";
import FamilyDetailsForm2 from "./familyDetailsForm2";

const FamilyDetails = () => {
    const [view, setView] = useState<"list" | "form">("list");
    const [selectedItem, setSelectedItem] = useState<any>(null);
  const familyList = [
    {
      id:1,
      name: "Mr Johnnie Walker Deep",
      relationship: "Brother",
      phone: "090 300 540 9888",
      address: "333 Adeniyi Street Victoria Island, Lagos"
    },
    {
      id:2,
      name: "Mr Johnnie Walker Deep",
      relationship: "Brother",
      phone: "090 300 540 9888",
      address: "333 Adeniyi Street Victoria Island, Lagos"
    }
  ];

    const handleClick = (item: any) => {
    console.log("Clicked item:", item); // Debug log
    setSelectedItem(item);
    setView("form");
  };

  return (
    <div className="family-container">
      {view === "list" ? (
      <>
      {/* Header */}
      <div className="family-header">
        <h3>Family Details</h3>
        <button className="add-btn">Add</button>
      </div>

      {/* Cards */}
      {familyList.map((item, index) => (
        <div className="family-card" key={item.id}
        onClick={() => handleClick(item)}>
          <h4>{item.name}</h4>

          <p>
            <strong>Relationship:</strong> {item.relationship} &nbsp; | &nbsp;
             <strong>Phone:</strong> {item.phone}
          </p>

          <p>
            <strong>Address:</strong> {item.address}
          </p>
        </div>
      ))}
      </>
      ) : (
         <FamilyDetailsForm2 
         data={selectedItem} 
         onBack={() => setView("list")} />
      )}
    </div>
  );
};

export default FamilyDetails;