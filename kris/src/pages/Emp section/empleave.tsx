// import  { useEffect, useState } from "react";
// import "../../styles/empleave.css";

// interface LeaveData {
//   leaveTypes: Array<{ days: number; type: string }>;
//   history: Array<{ name: string; duration: string; startDate: string; endDate: string; type: string; reason: string }>;
// }

// const LeaveDashboard: React.FC = () => {
// //   const [data, setData] = useState<LeaveData | null>(null);
//    const [leaves, setLeaves] = useState<LeaveData[]>([]);
//     const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetch("http://localhost:4000/leaves") // your API
// //       .then((res) => res.json())
// //       .then((json) => {
// //         console.log(json);
// //         setData(json);
// //       })
// //       .catch((err) => console.error(err));
// //   }, []);

//   useEffect(() => {
//     fetchLeaves();
//   }, []);

//   const fetchLeaves = async () => {
//     try{
//         const response = await fetch("http://localhost:4000/leaves",{
//         method: "GET",
//     });

//     const data: any = await response.json();
//     setLeaves(data);
//         } catch (error) {
//         console.error("Error fetching data", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return(
//     <div className="leave-dashboard">
//       <h1>Leave Dashboard</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <LeaveTable leaves={leaves} />
//         )}
//     </div>
//   );
// }

// //   if (loading) return <h2 className="loading">Loading...</h2>;

//   function LeaveTable({leaves}: {leaves: LeaveData[]}) {
//   return (
//     <div className="container">
//       {/* Top Navbar */}
//       <div className="navbar">
//         <div className="logo">kris</div>
//         <div className="menu">
//           <span className="active">Dashboard</span>
//           <span>Requests</span>
//           <span>Payroll</span>
//           <span>Company</span>
//           <span>Extras</span>
//         </div>
//         <div className="icons">
//           <div className="circle"></div>
//           <div className="circle"></div>
//           <div className="avatar"></div>
//         </div>
//       </div>

//       {/* Breadcrumb */}
//       <div className="breadcrumb">
//         Dashboard &gt; Apply for Leave
//       </div>

//       {/* Leave Cards */}
//       <div className="cards">
//         {leaves[0]?.leaveTypes.map((leave, index) => (
//           <div className="card" key={index}>
//             <div className="circle-count">{leave.days}</div>
//             <div className="card-info">
//               <p>{leave.type}</p>
//               <button>Apply</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Table Section */}
//       <div className="table-section">
//         <div className="table-header">
//           <h3>Leave History</h3>
//           <button className="export-btn">Export</button>
//         </div>

//         <table className="table " style={{marginLeft: "160px", width: "90%"}}> 
//           <thead>
//             <tr> 
//               <th>Name</th>
//               <th>Duration</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>Type</th>
//               <th>Reason</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaves.map((leave: any, index: any) => (
//               <tr key={index}>
//                 <td>{leave.name}</td>
//                 <td>{leave.duration}</td>
//                 <td>{leave.startDate}</td>
//                 <td>{leave.endDate}</td>
//                 <td>{leave.type}</td>
//                 <td>{leave.reason}</td>
//                 <td>
//                     <div className="dropdown">
//                   <button className="btn btn-primary btn-sm" data-bs-toggle="dropdown" >
//                     Action
//                   </button>
//                     <ul className="dropdown-menu" >
//                          <li><button className="dropdown-item">Approve</button></li>
//                          <li><button className="dropdown-item">Decline</button></li>
//                          <li><button className="dropdown-item">View Details</button></li>
//                          <li><button className="dropdown-item">Extension</button></li>
//                     </ul>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default LeaveDashboard;

import { useEffect, useState } from "react";
import Navbar2 from "../../Components/Navbar2";

type Leave = {
  name: string;
  duration: number;
  startDate: string;
  endDate: string;
  type: string;
  reason: string;
  leaveTypes?: Array<{ days: number; type: string }>;
};

const EmpLeave: React.FC = () => {

  const [leaves, setLeaves] = useState<Leave[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try{
        const response = await fetch("http://localhost:4000/leaves",{
        method: "GET",
    });

    const data: any = await response.json();
    setLeaves(data);
        } catch (error) {
        console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };


return (
    <div className="container mt-4">
        <Navbar2/>   
        <div className="container">

      {/* Leave Cards */}
       <div className="cards">
         {leaves[0]?.leaveTypes?.map((leave: any, index: any) => (
           <div className="card" key={index}>
             <div className="circle-count">{leave.days}</div>
             <div className="card-info">
               <p>{leave.type}</p>
               <button>Apply</button>
             </div>
           </div>
         ))}
       </div>
        
       {/* Breadcrumb */}
       <div className="breadcrumb">
         Dashboard &gt; Apply for Leave
       </div>

    </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <LeaveTable leaves={leaves} />
        )}
      </div>
    );
  }

function LeaveTable({leaves}: {leaves: Leave[]}) {
    return (
      <div className="container mt-4">
    <div className="container mt-4">    
        <table className="table " style={{marginLeft: "0px", width: "103%"}}> 
          <thead>
            <tr> 
              <th>Name</th>
              <th>Duration</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Type</th>
              <th>Reason</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave: any, index: any) => (
              <tr key={index}>
                <td>{leave.name}</td>
                <td>{leave.duration}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>{leave.type}</td>
                <td>{leave.reason}</td>
                <td>
                    <div className="dropdown">
                  <button className="btn btn-primary btn-sm" data-bs-toggle="dropdown" >
                    Action
                  </button>
                    <ul className="dropdown-menu" >
                         <li><button className="dropdown-item">Approve</button></li>
                         <li><button className="dropdown-item">Decline</button></li>
                         <li><button className="dropdown-item">View Details</button></li>
                         <li><button className="dropdown-item">Extension</button></li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
    );
};

export default EmpLeave;

