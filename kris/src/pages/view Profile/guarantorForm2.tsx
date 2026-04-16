import "../../styles/guarantorForm2.css";

const GuarantorForm = ({ data, onBack }: any) => {
  // ✅ Use props OR fallback hardcoded
  const formData = {
    name: data?.name || "Michael Johnson",
    job: data?.job || "Senior Manager",
    phone: data?.phone || "9876543210"
  };

  return (
    <div className="gua-form">
      <h3>Guarantor Details</h3>

      <label>Guarantor's Name</label>
      <input id="guarantor-name" type="text" value={formData.name} placeholder="Guarantor's name" readOnly />

      <label>Job title / Occupation</label>
      <input id="guarantor-job" type="text" value={formData.job} placeholder="Job title / Occupation" readOnly />

      <label>Phone No</label>
      <input id="guarantor-phone" type="text" value={formData.phone} placeholder="Phone number" readOnly />

      {onBack && (
        <button className="back-btn" onClick={onBack}>
          Back
        </button>
      )}
    </div>
  );
};

export default GuarantorForm;