// interface LeaveType {
//     sick: number;
//   casual: number;
//   compOff: number;
// }

// interface LeaveDaysProps {
//   leaves: LeaveType;
// }

// function LeaveDays({ leaves }: LeaveDaysProps) {
//   return (
//     <div className="card">
//       <h3>Available Leave Days</h3>
//       <p>Sick Leave: {leaves.sick}/10</p>
//       <p>Casual Leave: {leaves.casual}/10</p>
//       <p>Compensatory Off: {leaves.compOff}/10</p>
//       <progress value={leaves.compOff} max="10"></progress>
//     </div>
//   );
// }

// export default LeaveDays;

const LeaveStats = () => {
  return (
    <div className="card">
      <h4>Available Leave Days</h4>

      <div className="progress">
        <p>Annual Leave</p>
        <div className="bar"><span style={{ width: "30%" }} /></div>
      </div>

      <div className="progress">
        <p>Sick Leave</p>
        <div className="bar"><span style={{ width: "0%" }} /></div>
      </div>

      <div className="progress">
        <p>Compensation Leave</p>
        <div className="bar"><span style={{ width: "80%" }} /></div>
      </div>
    </div>
  );
};

export default LeaveStats;