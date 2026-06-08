import { useState } from "react";
import "../../styles/AnnualLeave.css";
import Navbar2 from "../../Components/Navbar2";

const LeaveApplication = () => {
  const [formData, setFormData] = useState({
    leaveType: "Sick Leave",
    startDate: "",
    endDate: "",
    duration: 0,
    resumptionDate: "",
    reason: "",
    reliefOfficer: "",
    file: null,
  });
  const [showPopup, setShowPopup] = useState(false);

  // Handle input change
  const handleChange = (e:any) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // POST API using fetch
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const data = new FormData();

    for (let key in formData) {
      data.append(key, formData[key as keyof typeof formData] as string | Blob);
    }

    try {
      const response = await fetch("http://localhost:4000/leaveapp", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setShowPopup(true);
      } else {
        alert("Failed to apply leave");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred");
    }
  };

  const handleReset = () => {
    setFormData({
      leaveType: "Sick Leave",
      startDate: "",
      endDate: "",
      duration: 0,
      resumptionDate: "",
      reason: "",
      reliefOfficer: "",
      file: null,
    });
  };

  return (
    <div className="leave-container">
        <Navbar2/>
      <div className="leave-card" >
        <h2>📖 Leave Application</h2>
        <p className="subtitle">
          Fill the required fields below to apply for annual leave.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Leave Type */}
          <label htmlFor="leaveType">Leave Type</label>
          <input
            id="leaveType"
            type="text"
            name="leaveType"
            value={formData.leaveType}
            readOnly
          />

          {/* Dates Row */}
          <div className="row">
            <div>
              <label htmlFor="startDate">Start Date</label>
              <input
                id="startDate"
                type="date"
                name="startDate"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="endDate">End Date</label>
              <input id="endDate" type="date" name="endDate" onChange={handleChange} />
            </div>
          </div>

          {/* Duration + Resumption */}
          <div className="row">
            <div>
              <label htmlFor="duration">Duration</label>
              <input
                id="duration"
                type="number"
                name="duration"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) || 0 })}
              />
            </div>

            <div>
              <label htmlFor="resumptionDate">Resumption Date</label>
              <input
                id="resumptionDate"
                type="date"
                name="resumptionDate"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Reason */}
          <label htmlFor="reason">Reason for leave</label>
          <textarea
            id="reason"
            name="reason"
            onChange={handleChange}
          ></textarea>

          {/* File Upload */}
          <label htmlFor="file">
            Attach handover document (pdf, jpg, docx or any other format)
          </label>
          <input id="file" type="file" name="file" onChange={handleChange} />

          {/* Dropdown */}
          <label htmlFor="reliefOfficer">Choose Relief Officer</label>
          <select id="reliefOfficer" name="reliefOfficer" onChange={handleChange}>
            <option value="">Select your relief officer</option>
            <option value="Officer1">Officer 1</option>
            <option value="Officer2">Officer 2</option>
          </select>

          {/* Buttons */}
          <div className="button-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
         {showPopup && (
          <div className="popup-overlay">
            <div className="popup-box">
              <h3>✅ Leave Applied Successfully!</h3>
              <p>Your leave request has been submitted.</p>

              <button onClick={() => setShowPopup(false)}>
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaveApplication;