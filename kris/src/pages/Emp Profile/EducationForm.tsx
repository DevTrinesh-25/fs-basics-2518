import { useEffect, useState } from "react";
import "../../styles/EducationForm.css";

const EducationForm = () => {
  const [formData, setFormData] = useState({
    institution: "",
    department: "",
    course: "",
    location: "",
    startDate: "",
    endDate: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);

  // ✅ GET API (Prefill Data)
  useEffect(() => {
    fetch("http://localhost:4000/education/3")
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          institution: data.institution || "",
          department: data.department || "",
          course: data.course || "",
          location: data.location || "",
          startDate: data.startDate || "",
          endDate: data.endDate || "",
          description: data.description || ""
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // ✅ Handle Input
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Submit API (POST / PUT)
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/education", {
        method: "PUT", // change to POST if creating
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      console.log(result);

      alert("Updated Successfully ✅");
    } catch (error) {
      console.error(error);
      alert("Error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h3>Academic Records / Academic Details</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">

          {/* Institution */}
          <div>
            <label>Name of Institution</label>
            <input
              name="institution"
              placeholder="Enter institution name"
              value={formData.institution}
              onChange={handleChange}
            />
          </div>

          {/* Department */}
          <div>
            <label>Department</label>
            <input
              name="department"
              placeholder="Enter department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          {/* Course */}
          <div>
            <label>Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              title="Select a course"
            >
              <option>Computer Science</option>
              <option>Engineering</option>
              <option>BBA</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label>Location</label>
            <input
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          {/* Start Date */}
          <div>
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              title="Select start date"
            />
          </div>

          {/* End Date */}
          <div>
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              title="Select end date"
            />
          </div>

          {/* Description */}
          <div style={{ gridColumn: "span 2" }}>
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="update-btn" disabled={loading}>
          {loading ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default EducationForm;