import { useState } from "react";
import "../../styles/guarantor.css";
import GuarantorForm from "../Emp Profile/guarantorForm";


const Guarantor = () => {
  const [view, setView] = useState<"list" | "form">("list");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const guarantors = [
    {
      id: 1,
      name: "Mr Johnnie Walker Deep",
      role: "Head of Design Team",
      company: "Microsoft Inc",
      phone: "090 500 500 6000"
    },
    {
      id: 2,
      name: "Miss Walkie Talkie",
      role: "Human Resources Manager",
      company: "Apple Inc",
      phone: "090 400 400 4848"
    }
  ];

    const handleClick = (item: any) => {
    setSelectedItem(item);
    setView("form");
  };
  
  return (
    <div className="guarantor-container">
      {view === "list" ? (
        <>
      <h3 className="section-title">Guarantor Details</h3>

      {guarantors.map((item) => (
        <div className="guarantor-card" key={item.id}
              onClick={() => handleClick(item)}
              style={{ cursor: "pointer" }}>
          <h4>{item.name}</h4>
          <p>
            {item.role}, {item.company} - {item.phone}
          </p>
        </div>
      ))}
      </>
      ) : (
         <GuarantorForm
          data={selectedItem}
          onBack={() => setView("list")}
        />
      )}
    </div>
  );
};

export default Guarantor;