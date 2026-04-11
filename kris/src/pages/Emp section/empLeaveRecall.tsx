// import "../../styles/empLeaveRecall.css";
// import Navbar2 from "../../Components/Navbar2";
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const LeaveRecall = () => {
//   const location = useLocation();
//   const leaveId = location.state?.leaveId;

//   const [recallData, setRecall] = useState<any>(null);
//   const [reason, setReason] = useState("");

//   useEffect(() => {
//     if (!leaveId) return;

//     fetch(`http://localhost:4000/leaveapp/${leaveId}`)
//       .then((res) => res.json())
//       .then((data) => setRecall(data))
//       .catch((err) => console.error(err));
//   }, [leaveId]);
  

//   const handleAction = async (status: "APPROVED" | "DECLINED") => {
//   try {
//     const response = await fetch(
//       `http://localhost:4000/leaveapp/${leaveId}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           status,
//           reason,
//         }),
//       }
//     );

//     if (response.ok) {
//       alert(`Leave ${status} successfully`);
//     } else {
//       alert("Failed to update status");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
//   return (
//     <div className="recall-container">
//       <Navbar2 />

//       <div className="recall-card">
//         <h2>📖 Leave Recall</h2>
//         {/* <div className="recall-box">
//         <p><strong>Dear User,</strong></p>

//           <p>
//             This is to inform you that you have been <b>RECALLED</b> from your 
//             <b> {leaveapp.leaveType}</b> by your line manager named 
//             <b> {leaveapp.relirfOfficer}</b> for an urgent meeting and task to be completed 
//             in the office before <b>2nd June, 2022</b>.
//           </p>
//         </div> */}

//         {recallData && (
//         <div className="recall-box">
//             <p><strong>Dear {recallData.employeeName},</strong></p>

//             <p>
//             This is to inform you that you have been <b>RECALLED</b> from your 
//             <b> {recallData.leaveType}</b> by your line manager named 
//             <b> {recallData.reliefOfficer}</b> for an urgent meeting and task 
//             to be completed before <b>{recallData.date}</b>.
//             </p>
//         </div>
//         )}

//         <label>If No, state reason why ?</label>
//         <textarea
//           placeholder="State your reason..."
//           value={reason}
//           onChange={(e) => setReason(e.target.value)}
//         />

//         <div className="button-group">
//         <button
//             className="approve-btn"
//             onClick={() => handleAction("APPROVED")}
//         >
//             Approve
//         </button>

//         <button
//             className="decline-btn"
//             onClick={() => handleAction("DECLINED")}
//         >
//             Decline
//         </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeaveRecall;



import "../../styles/empLeaveRecall.css";
import Navbar2 from "../../Components/Navbar2";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const LeaveRecall = () => {
  const location = useLocation();
  const Id = location.state?.Id;

  const [recallData, setRecallData] = useState<any>(null);
  const [reason, setReason] = useState("");

  // ✅ Fetch recall data
  useEffect(() => {
    if (!Id) return;

    fetch(`http://localhost:4000/recall/${Id}`)
      .then((res) => res.json())
      .then((data) => setRecallData(data))
      .catch((err) => console.error(err));
  }, [Id]);

  const handleAction = async (status: "APPROVED" | "DECLINED") => {
  try {
    const response = await fetch(
      `http://localhost:4000/recall/action/${Id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
          reason,
        }),
      }
    );

    if (response.ok) {
      alert(`Leave ${status} successfully`);
    } else {
      alert("Failed to update status");
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="recall-container">
      <Navbar2 />

      <div className="recall-card">
        <h2>📖 Leave Recall</h2>

        <div className="recall-box">
          <p><strong>Dear User,</strong></p>

          <p>
            This is to inform you that you have been <b>RECALLED</b> from your 
            <b> CASUAL Leave</b> by your line manager named 
            <b> DOYINSOLA ODUNSI</b> for an urgent meeting and task to be completed 
            in the office before <b>2nd June, 2022</b>.
          </p>
        </div>

        <label>If No, state reason why ?</label>
        <textarea
          placeholder="State your reason..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <div className="button-group">
          <button
            className="approve-btn"
            onClick={() => handleAction("APPROVED")}
          >
            Approve
          </button>

          <button
            className="decline-btn"
            onClick={() => handleAction("DECLINED")}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveRecall;