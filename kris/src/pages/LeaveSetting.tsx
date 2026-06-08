import React, { useEffect, useState } from "react";
import "../styles/LeaveSetting.css";

type LeaveSettingType = {
  id?: number;
  leavePlan: string;
  duration: number;
  recall: string;
  leaveBonus: string;
  leaveBonusPercentage: number;
  leaveAllocation: string;
  Reason:string;
};

const LeaveSetting: React.FC = () => {

  // ✅ TABLE DATA
  const [leaves, setLeaves] = useState<LeaveSettingType[]>([]);

  // ✅ FORM DATA
  const [formData, setFormData] = useState<LeaveSettingType>({
    leavePlan: "",
    duration: 0,
    recall: "",
    leaveBonus:"",
    leaveBonusPercentage: 0,
    leaveAllocation: "",
    Reason:""
  });

  // ✅ GET API (TABLE)
  useEffect(() => {
    fetchLeaveSetting();
  }, []);

  const fetchLeaveSetting = async () => {
    try {
      const response = await fetch("http://localhost:4000/leavesetting");
      const data = await response.json();
      setLeaves(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  // ✅ HANDLE INPUT
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ POST API (FORM)
  
  const handleSubmit = async () => {
    try {
      await fetch("http://localhost:4000/leavesetting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });


      // refresh table
      fetchLeaveSetting();

      // clear form
      setFormData({
        leavePlan: "",
        duration: 0,
        recall: "",
        leaveBonus:"",
        leaveBonusPercentage: 0,
        leaveAllocation:"",
        Reason:""
      });

    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  return (
    <div className="container-fluid main-content">
      <div className="row g-4">

        {/* ✅ FORM (LEFT) */}
        <div className="col-lg-6 col-md-12">
          <div className="card p-4 shadow-sm">
            <h5 className="mb-3">Create Leave Settings</h5>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="leavePlanName">Leave Plan Name</label>
                <input
                  id="leavePlanName"
                  type="text"
                  name="leavePlan"
                  value={formData.leavePlan}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="durationDays">Duration (days)</label>
                <input
                  id="durationDays"
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="recallOption">Activate Leave Recall?</label>
              <select
                id="recallOption"
                name="recall"
                value={formData.recall}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select option</option>
                <option>Yes / No</option>
                <option>No / Yes</option>
                <option>No / No</option>
              </select>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="leaveBonusOption">Activate Level Bonus</label>
                <select 
                  id="leaveBonusOption"
                  name="leaveBonus"
                  value={formData.leaveBonus}
                  onChange={handleChange}
                  className="form-select"
                  >
                    <option>Select Option</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="leaveBonusPercentage">Leave Bonus Percentage</label>
                <input
                  id="leaveBonusPercentage"
                  type="number"
                  name="leaveBonusPercentage"
                  value={formData.leaveBonusPercentage}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="leaveAllocation">Select Leave Allocation</label>
              <select
                id="leaveAllocation"
                name="leaveAllocation"
                value={formData.leaveAllocation}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select option</option>
                <option>Senior Level</option>
                <option>Junior Level</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="reasonForRecall">Reason For Recall</label>
              <input
                  id="reasonForRecall"
                  type="text"
                  name="Reason"
                  value={formData.Reason}
                  onChange={handleChange}
                  className="form-control"
                />
            </div>



            <button onClick={handleSubmit} className="btn btn-success w-100">
              Create
            </button>
          </div>
        </div>

        {/* ✅ TABLE (RIGHT) */}
        <div className="col-lg-6 col-md-12">
          <div className="card table-card p-4 shadow-sm">

            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Manage Leave Settings</h5>
              <span className="dots">⋮</span>
            </div>

            <div className="table-responsive">
              <table className="table custom-table mb-0">
                <thead>
                  <tr>
                    <th className="col-30">Leave Plan</th>
                    <th className="col-15">Duration</th>
                    <th className="col-25">Recall</th>
                    <th className="col-30">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {leaves.map((item) => (
                    <tr key={item.id}>
                      <td>{item.leavePlan}</td>
                      <td>{item.duration}</td>
                      <td>{item.recall}</td>
                      <td>
                        <button className="btn action-btn">
                          Actions ▼
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LeaveSetting;