import "../../styles/guarantorForm2.css";

const FamilyDetailsForm = ({ data, onBack }: any) => {
  // ✅ Use props OR fallback hardcoded data
  const formData = {
    fullname: data?.name || "Anita Sharma",
    relationship: data?.relationship || "Mother",
    phone: data?.phone || "9876543210",
    address: data?.address || "Hyderabad, India"
  };

  return (
    <div className="family-details-form">
      <h3>Family Details</h3>

      <label>Full Name</label>
      <input id="fullname" type="text" value={formData.fullname} placeholder="Enter full name" readOnly />

      <label>Relationship</label>
      <input id="relationship" type="text" value={formData.relationship} placeholder="Enter relationship" readOnly />

      <label>Phone No</label>
      <input id="phone" type="text" value={formData.phone} placeholder="Enter phone number" readOnly />

      <label>Address</label>
      <input id="address" type="text" value={formData.address} placeholder="Enter address" readOnly />

      {onBack && (
        <button className="back-btn" onClick={onBack}>
          Back
        </button>
      )}
    </div>
  );
};

export default FamilyDetailsForm;