import { useEffect, useState } from "react";
import '../styles/LeaveRecall.css';


type Leave = {
  name: string;
  duration: number;
  startDate: string;
  endDate: string;
  type: string;
  reason: string;
  dayremaining: number;
  newResumptionDate:Date;
};

const LeaveRecall: React.FC = () => {

  const [leaves, setLeaves] = useState<Leave[]>([]);
  const [loading, setLoading] = useState(true);
  
   const [showModal, setShowModal] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState<Leave | null>(null);

  // form states
  const [daysRemaining, setDaysRemaining] = useState("");
  const [resumptionDate, setResumptionDate] = useState("");

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
  
   const handleRecallClick = (leave: Leave) => {
    setSelectedLeave(leave);
    setShowModal(true);
  };

  // close modal
  const handleClose = () => {
    setShowModal(false);
  };

   const handleSubmitRecall = async () => {
    try {
      const response = await fetch("http://localhost:4000/recall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
          name: selectedLeave?.name,
          startDate: selectedLeave?.startDate,
          endDate: selectedLeave?.endDate,
          daysRemaining,
          resumptionDate
        }
        )
      });

      if (response.ok) {
        alert("Recall initiated successfully");
        setShowModal(false);
      } else {
        alert("Failed to initiate recall");
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h4>Leave Recall</h4>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <LeaveTable leaves={leaves} onRecall={handleRecallClick} />
      )}

      {/* ✅ MODAL */}
      {showModal && selectedLeave && (
        <>
        <div className="overlay"></div>

         <div className="custom-modal">
          <div className="custom-modal-content">
            <div className="modal-content p-4 rounded-4">

              <h4 className="mb-3">Leave Recall</h4>

              <div className="row">

                <div className="col-md-12 mb-2">
                  <label>Employee Name</label>
                  <input className="form-control" value={selectedLeave.name} disabled />
                </div>

                <div className="col-md-12 mb-2">
                  <label>Type</label>
                  <input className="form-control" value={selectedLeave.type} disabled />
                </div>

                <div className="col-md-6 mb-2">
                  <label>Start Date</label>
                  <input  className="form-control" value={(selectedLeave.startDate)}  />
                </div>

                <div className="col-md-6 mb-2">
                  <label>End Date</label>
                  <input className="form-control" value={(selectedLeave.endDate)}  />
                </div>

                <div className="col-md-6 mb-2">
                  <label>Days Remaining</label>
                  <input
                    type="number"
                    className="form-control"
                    value={daysRemaining}
                    onChange={(e) => setDaysRemaining(e.target.value)}
                  />
                </div>

                <div className="col-md-6 mb-2">
                  <label>New Resumption Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={resumptionDate}
                    onChange={(e) => setResumptionDate(e.target.value)}
                  />
                </div>

              </div>

              <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-success px-4" onClick={handleSubmitRecall}>
                  Initiate Recall
                </button>

                <button className="btn btn-outline-danger px-4" onClick={handleClose}>
                  Cancel
                </button>
              </div>

            </div>
          </div>

          {/* <div className="modal-backdrop fade show"></div> */}
        </div>
      
        </>
      )}

    </div>
  );
};


// return (
//     <div className="container mt-4">
//         <h4>Leave Recall</h4>   
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <LeaveTable leaves={leaves} />
//         )}
//       </div>
//     );

// }

function LeaveTable({leaves, onRecall}: {leaves: Leave[];
  onRecall: (leave:Leave) => void;
}) {
    return (
      <div className="container mt-4">
    <div className="container mt-4">   
    <h5>Ongoing Leave Applications</h5>  
        <table className="table " style={{marginLeft: "90px", width: "100%"}}> 
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
                  <button className="btn btn-primary btn-sm" onClick={() => onRecall(leave)}>
                    Recall
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
    );
};

export default LeaveRecall;

