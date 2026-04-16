import "../../styles/NextOfkin2.css";

const NextOfKin = () => {
  // ✅ Hardcoded data
  const formData = {
    name: "John Doe samson",
    occupation: "IT Manager",
    phone: "0812000000",
    relationship: "Relative",
    address: "18 junction site,Lekki"
  };

  return (
    <div className="form-container">
      <h3>Next of Kin Details</h3>

      <div className="form-grid">

        {/* Name */}
        <div>
          <label>Name</label>
          <input id="name" type="text" value={formData.name} placeholder="Name" title="Name" readOnly />
        </div>

        {/* Occupation */}
        <div>
          <label>Occupation</label>
          <input id="occupation" type="text" value={formData.occupation} placeholder="Occupation" title="Occupation" readOnly />
        </div>

        {/* Phone */}
        <div>
          <label>Phone</label>
          <input id="phone" type="text" value={formData.phone} placeholder="Phone" title="Phone" readOnly />
        </div>

        {/* Relationship */}
        <div>
          <label>Relationship</label>
          <input id="relationship" type="text" value={formData.relationship} placeholder="Relationship" title="Relationship" readOnly />
        </div>

        {/* Address */}
        <div className="full-width">
          <label>Residential Address</label>
          <textarea id="address" value={formData.address} placeholder="Residential Address" title="Residential Address" readOnly />
        </div>

      </div>
    </div>
  );
};

export default NextOfKin;