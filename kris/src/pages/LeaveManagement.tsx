import { useNavigate } from 'react-router-dom'
import '../styles/LeaveManagement.css'

function LeaveManagement() {
  const navigate = useNavigate();

  return (
     <div className="container-fluid p-4">
            <div className="mb-3">
              <h5 className="fw-bold">📖 Leave Management</h5>
            </div>

            <div className="d-flex gap-3 mb-4 flex-wrap" style={{ marginLeft: '190px', width: '700px' }}>
              <button  className="btn leave-btn"  onClick={()=> navigate("/leavesetting")}>Leave Settings</button>
              <button className="btn leave-btn" onClick={()=> navigate("/leaverecall")}>Leave Recall</button>
              <button className="btn leave-btn" onClick={()=> navigate("/leavehistory")}>Leave History</button>
              <button className="btn leave-btn" onClick={()=> navigate("/reliefofficers")}>Relief Officers</button>
            </div>

            <div className="leave-banner d-flex align-items-center justify-content-between">
              <div className="text-white">
                <h3 className="fw-bold">
                  Manage ALL <span className="text-warning">Leave Applications</span>
                </h3>
                <p>A relaxed employee is a performing employee.</p>
              </div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
                  width="200"
                  alt="leave"
                />
              </div>
            </div>
          </div>
  )
}

export default LeaveManagement;