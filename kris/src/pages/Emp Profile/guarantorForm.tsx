import { useState } from "react";
import "../../styles/guarantorForm.css";

const GuarantorForm = ({ data, onBack }: any) => {
  const [formData, setFormData] = useState({
    name: data?.name || "",
    job: data?.job || "",
    phone: data?.phone || ""
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ API CALL (FETCH)
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/guarantor", {
        method: "PUT", // or PUT
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log("Success:", result);

      alert("Updated Successfully");
      onBack(); // go back to list
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="gua-form">
      <h3>View Guarantor Details</h3>

      <label htmlFor="name">Guarantor's Name</label>
      <input
        id="name"
        name="name"
        title="Guarantor's Name"
        placeholder="Enter guarantor's name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="job">Job title / Occupation</label>
      <input
        id="job"
        name="job"
        title="Job title / Occupation"
        placeholder="Enter job title or occupation"
        value={formData.job}
        onChange={handleChange}
      />

      <label htmlFor="phone">Phone No</label>
      <input
        id="phone"
        name="phone"
        title="Phone No"
        placeholder="Enter phone number"
        value={formData.phone}
        onChange={handleChange}
      />

      <button className="update-btn" onClick={handleSubmit}>Update</button>
      <button className="back-btn" onClick={onBack}>Back</button>
    </div>
  );
};

export default GuarantorForm;