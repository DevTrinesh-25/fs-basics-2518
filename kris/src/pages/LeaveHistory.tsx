import { useEffect, useState } from "react";

type Leave = {
  name: string;
  duration: number;
  startDate: string;
  endDate: string;
  type: string;
  reason: string;
};

const LeaveHistory: React.FC = () => {

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
        <h4>Leave History</h4>   
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
        <table className="table " style={{marginLeft: "160px", width: "90%"}}> 
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

export default LeaveHistory;

