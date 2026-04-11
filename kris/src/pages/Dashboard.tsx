import '../styles/Dashboard.css'

const Dashboard: React.FC = () => {
  return (
    <>
      {/* Top Cards */}
      <div className="row g-3">
        <DashboardCard color="yellow" icon="bi-envelope" value="138" label="Messages" />
        <DashboardCard color="blue" icon="bi-briefcase" value="50" label="Jobs" />
        <DashboardCard color="green" icon="bi-people" value="100" label="Candidates" />
        <DashboardCard color="black" icon="bi-file-earmark" value="50" label="Resumes" />
        <DashboardCard color="yellow" icon="bi-person" value="200" label="Employees" />
        <DashboardCard color="blue" icon="bi-book" value="20" label="Leaves" />
      </div>

      {/* Bottom Section */}
      <div className="row mt-4">
        
        {/* Applied Jobs */}
        <div className="col-md-6" >
          <div className="card" style={{ marginLeft: '190px', marginRight: '90px', width: '500px' ,paddingRight: '60px'}}>
            <div className="card-header">
              Applied Jobs
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Sales Executive
                <span className="float-end text-muted">20 mins ago</span>
              </li>
              <li className="list-group-item">
                UX Designer
                <span className="float-end text-muted">10 mins ago</span>
              </li>
              <li className="list-group-item">
                Product Manager
                <span className="float-end text-muted">5 mins ago</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payroll */}
        <div className="col-md-6">
          <div className="card" style={{ marginLeft: '150px' }}>
            <div className="card-header">
              April Payroll
            </div>
            <div className="card-body">
              <Payroll name="John Doe" percent="80%" color="bg-success" />
              <Payroll name="Ginna Lee" percent="60%" color="bg-warning" />
              <Payroll name="James" percent="50%" color="bg-warning" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard;

type PayrollProps = {
  name: string;
  percent: string;
  color: string;
};

const Payroll: React.FC<PayrollProps> = ({ name, percent, color }) => {
    return (
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <span>{name}</span>
          <span>{percent}</span>
        </div>
        <div className={`progress mt-2 ${color}`}>
          <div className={`progress-bar ${color}`} style={{ width: percent }}></div>
        </div>
      </div>
    );
};


type CardProps = {
  color: string;
  icon: string;
  value: string;
  label: string;
};

const DashboardCard: React.FC<CardProps> = ({ color, icon, value, label }) => {
  return (
    <div className="col-md-2">
      <div className={`card-box ${color}`}>
        <div>
          <h5>{value}</h5>
          <p>{label}</p>
        </div>
        <i className={`bi ${icon} icon`}></i>
      </div>
    </div>
  );
};