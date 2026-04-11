import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AnnualLeave.css";
import Navbar2 from "../../Components/Navbar2";

const AnnualLeave = () => {
  const [formData, setFormData] = useState({
    leaveType: "Annual Leave",
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

  const navigate = useNavigate();
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

    const result = await response.json();

      if (response.ok) {
        setShowPopup(true);
      setTimeout(() => {
        navigate("/empLeaveRecall", {
          state: {
            leaveId: result.id,   //  important
          },
        });
      }, 1500);
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
      leaveType: "Annual Leave",
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
          <label>Leave Type</label>
          <input
            type="text"
            name="leaveType"
            value={formData.leaveType}
            readOnly
          />

          {/* Dates Row */}
          <div className="row">
            <div>
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                onChange={handleChange}
              />
            </div>

            <div>
              <label>End Date</label>
              <input type="date" name="endDate" onChange={handleChange} />
            </div>
          </div>

          {/* Duration + Resumption */}
          <div className="row">
            <div>
              <label>Duration</label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) || 0 })}
              />
            </div>

            <div>
              <label>Resumption Date</label>
              <input
                type="date"
                name="resumptionDate"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Reason */}
          <label>Reason for leave</label>
          <textarea
            name="reason"
            onChange={handleChange}
          ></textarea>

          {/* File Upload */}
          <label>
            Attach handover document (pdf, jpg, docx or any other format)
          </label>
          <input type="file" name="file" onChange={handleChange} />

          {/* Dropdown */}
          <label>Choose Relief Officer</label>
          <select name="reliefOfficer" onChange={handleChange}>
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
              <p>Great jpb! 
                Your Leave Application would be
                review by the admin.
              </p>

              {/* <button onClick={() => setShowPopup(false)}>
                OK
              </button> */}
              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate("/empLeaveRecall"); // redirect here
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnualLeave;
