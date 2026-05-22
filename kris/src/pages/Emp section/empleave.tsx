import { useEffect, useState } from "react";
import Navbar2 from "../../Components/Navbar2";
import "../../styles/empleave.css";

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

