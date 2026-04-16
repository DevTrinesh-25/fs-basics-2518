import "../../styles/contact2.css";

const ContactDetails = () => {
  // ✅ Hardcoded data
  const formData = {
    phone1: "9876543210",
    phone2: "9123456780",
    email: "johndoe@gmail.com",
    state: "Telangana",
    city: "Hyderabad",
    address: "Hitech City, Hyderabad, India"
  };

  return (
    <div className="contact-container">
      <div className="contact-card">

        <div className="row">
          <div className="field">
            <label htmlFor="phone1">Phone Number 1</label>
            <input id="phone1" type="text" value={formData.phone1} placeholder="Phone Number 1" title="Phone Number 1" readOnly />
          </div>

          <div className="field">
            <label htmlFor="phone2">Phone Number 2</label>
            <input id="phone2" type="text" value={formData.phone2} placeholder="Phone Number 2" title="Phone Number 2" readOnly />
          </div>
        </div>

        <div className="field full">
          <label htmlFor="email">E-mail Address</label>
          <input id="email" type="email" value={formData.email} placeholder="E-mail Address" title="E-mail Address" readOnly />
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="state">State of residence</label>
            <input id="state" type="text" value={formData.state} placeholder="State of residence" title="State of residence" readOnly />
          </div>

          <div className="field">
            <label htmlFor="city">City</label>
            <input id="city" type="text" value={formData.city} placeholder="City" title="City" readOnly />
          </div>
        </div>

        <div className="field full">
          <label htmlFor="address">Residential Address</label>
          <textarea id="address" value={formData.address} placeholder="Residential Address" title="Residential Address" readOnly />
        </div>

      </div>
    </div>
  );
};

export default ContactDetails;