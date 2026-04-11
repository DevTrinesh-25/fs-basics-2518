import { useState } from "react";
import "../../styles/guarantorForm.css";

const FamilyDetailsForm = ({ data, onBack }: any) => {
  const [formData, setFormData] = useState({
    fullname: data?.name || "",
    relationship: data?.job || "",
    phone: data?.phone || "",
    address: data?.address || ""
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
      const response = await fetch("http://localhost:4000/familydetails", {
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
    <div className="family-details-form">
      <h3>View Family Details</h3>

      <label htmlFor="fullname">Full Name</label>
      <input
        id="fullname"
        name="fullname"
        title="Guarantor's Name"
        placeholder="Enter guarantor's name"
        value={formData.fullname}
        onChange={handleChange}
      />

      <label htmlFor="relationship">Relationship</label>
      <input
        id="relationship"
        name="relationship"
        title="Job title / Occupation"
        placeholder="Enter job title or occupation"
        value={formData.relationship}
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

        <label htmlFor="address">Address</label>
        <input
            id="address"
            name="address"
            title="Address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
        />

      <button className="update-btn" onClick={handleSubmit}>Update</button>
      <button className="back-btn" onClick={onBack}>Back</button>
    </div>
  );
};

export default FamilyDetailsForm;