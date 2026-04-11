import { useEffect, useState } from "react";
import "../../styles/nextofkin.css";

const NextOfKin = () => {
  const [formData, setFormData] = useState({
    name: "",
    occupation: "",
    phone: "",
    relationship: "",
    address: ""
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  // ✅ GET API (Fetch existing data)
  useEffect(() => {
    fetch("http://localhost:4000/nextofkin")
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          name: data.name || "",
          occupation: data.occupation || "",
          phone: data.phone || "",
          relationship: data.relationship || "",
          address: data.address || ""
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // ✅ Handle Input Change
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Validation
  const validate = () => {
    let newErrors: any = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.occupation) newErrors.occupation = "Occupation is required";

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.relationship)
      newErrors.relationship = "Relationship is required";

    if (!formData.address)
      newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ POST API (Submit Form)
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:4000/nextofkin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const result = await response.json();

      alert("Updated Successfully ✅");
      console.log(result);
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3>Next of Kin Details</h3>

      <div className="form-grid">
        {/* Name */}
        <div>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Next of kin name"
          />
          <p className="error">{errors.name}</p>
        </div>

        {/* Occupation */}
        <div>
          <input
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Job / Occupation"
          />
          <p className="error">{errors.occupation}</p>
        </div>

        {/* Phone */}
        <div>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          <p className="error">{errors.phone}</p>
        </div>

        {/* Relationship */}
        <div>
          <select
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            title="Select your relationship to the employee"
          >
            <option value="">Select Relationship</option>
            <option value="Relative">Relative</option>
            <option value="Friend">Friend</option>
            <option value="Colleague">Colleague</option>
            <option value="Sibling">Sibling</option>
            <option value="Spouse">Spouse</option>
            <option value="Other">Other</option>
          </select>
          <p className="error">{errors.relationship}</p>
        </div>

        {/* Address */}
        <div style={{ gridColumn: "span 2" }}>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Residential Address"
          />
          <p className="error">{errors.address}</p>
        </div>
      </div>

      <button type="submit" className="update-btn" disabled={loading}>
        {loading ? "Updating..." : "Update"}
      </button>
    </form>
  );
};

export default NextOfKin;