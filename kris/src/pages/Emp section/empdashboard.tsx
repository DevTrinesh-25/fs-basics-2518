// import { useEffect, useState } from "react";
// import QuickActions from "../../Components/QuickActions";
// import LeaveDays from "../../Components/LeaveDays";
// import Todos from "../../Components/Todos";
// import Announcements from "../../Components/Announcements";
// import Payslip from "../../Components/Payslip";
// import Birthdays from "../../Components/Birthdays";
// import PerformanceChart from "../../Components/PerformanceChart";
// import "../../styles/empdashboard.css";
// import Navbar2 from "../../Components/Navbar2";

// interface DashboardData {
//   quickActions: any[];
//   leaveDays: any;
//   todos: any[];
//   announcements: any[];
//   payslip: any;
//   birthdays: any[];
//   performance: any;
// }

// function EmpDashboard() {
//   const [data, setData] = useState<DashboardData | null>(null);

//   useEffect(() => {
//     fetch("http://localhost:4000/empdashboard") // backend endpoint
//       .then((res) => res.json())
//       .then((json) => setData(json))
//       .catch((err) => console.error(err));
//   }, []);

//   if (!data) return <p>Loading...</p>;
  

//   return (
//     <div className="dashboard">
//       <Navbar2/>
//       <div className="grid-container">
//         <QuickActions actions={data.quickActions|| []} />
//         <LeaveDays leaves={data.leaveDays || {}} />
//         <Todos todos={data.todos || []} />
//         <Announcements announcements={data.announcements || []} />
//         <Payslip payslip={data.payslip || {}} />
//         <Birthdays birthdays={data.birthdays || []} />
//         <PerformanceChart chartData={data.performance || {}} />
//       </div>
//     </div>
//   );
// }

// export default EmpDashboard;

import Navbar2 from "../../Components/Navbar2";
import ProfileCard from "../../Components/ProfileCard";
import QuickActions from "../../Components/QuickActions";
import LeaveStats from "../../Components/LeaveStats";
import TodoList from "../../Components/TodoList";
import Announcements from "../../Components/Announcements";
import Payslip from "../../Components/Payslip";
import Birthdays from "../../Components/Birthdays";
import PerformanceChart from "../../Components/PerformanceChart";
import "../../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar2 />

      <div className="dashboard-content">
        <h3>Dashboard</h3>

        <ProfileCard />
        <QuickActions actions={[]} />

        <div className="grid">
          <LeaveStats />
          <TodoList />
          <Announcements />
          <Payslip />
          <Birthdays />
          <PerformanceChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;