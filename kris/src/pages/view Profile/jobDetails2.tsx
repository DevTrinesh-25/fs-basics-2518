import "../../styles/jobDetails2.css";
import { useNavigate } from "react-router-dom";

const JobDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="job-container" style={{"margin": "20px"}}>

      <div className="job-card">
        <h3>View Job Details</h3>

        <div className="job-center">
          <p className="label">Job Role</p>
          <h2>UI UX Designer</h2>
        </div>

        <div className="job-row">
          <div>
            <p className="label">Department</p>
            <h4>Design & Marketing</h4>
          </div>

          <div>
            <p className="label">Line Manager</p>
            <h4>Mr Domino's Pizza</h4>
          </div>
        </div>

        <div className="job-desc">
          <p className="label">Job Description</p>
          <ul>
            <li>Creating user-centered designs based on requirements</li>
            <li>Creating wireframes, prototypes and mockups</li>
            <li>Designing UI elements and components</li>
            <li>Creating original graphics</li>
            <li>Identifying and troubleshooting UX problems</li>
            <li>Collaborating with teams</li>
          </ul>
        </div>

        {/* ✅ Only View Button */}
        <div className="btn-group">
          <button
            className="view-btn"
            onClick={() => navigate("/viewDoc")}
          >
            View Documents
          </button>
        </div>

      </div>
    </div>
  );
};

export default JobDetails;