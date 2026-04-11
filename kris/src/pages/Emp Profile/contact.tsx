import { useState, useEffect } from "react";
import "../../styles/contact.css";

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    phone1: "",
    phone2: "",
    email: "",
    state: "",
    city: "",
    address: ""
  });

  // ✅ GET API (fetch existing data)
  useEffect(() => {
    fetch("http://localhost:4000/contact")
      .then(res => res.json())
      .then(data => {
        setFormData({
          phone1: data.phone1 || "",
          phone2: data.phone2 || "",
          email: data.email || "",
          state: data.state || "",
          city: data.city || "",
          address: data.address || ""
        });
      })
      .catch(err => console.log(err));
  }, []);

  // ✅ Handle Change
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ POST / PUT API
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/contact", {
        method: "POST", // or "PUT"
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log("Saved:", result);

      alert("Updated Successfully ✅");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-card" onSubmit={handleSubmit}>

        <div className="row">
          <div className="field">
            <label>Phone Number 1</label>
            <input
              type="text"
              name="phone1"
              value={formData.phone1}
              onChange={handleChange}
              placeholder="Phone Number 1"
            />
          </div>

          <div className="field">
            <label>Phone Number 2</label>
            <input
              type="text"
              name="phone2"
              value={formData.phone2}
              onChange={handleChange}
              placeholder="Phone Number 2"
            />
          </div>
        </div>

        <div className="field full">
          <label>E-mail Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@gmail.com"
          />
        </div>

        <div className="row">
          <div className="field">
            <label>State of residence</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State of residence"
            />
          </div>

          <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              placeholder="City"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="field full">
          <label>Residential Address</label>
          <textarea
            name="address"
            placeholder="Residential Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <button className="update-btn">Update</button>
      </form>
    </div>
  );
};

export default ContactDetails;