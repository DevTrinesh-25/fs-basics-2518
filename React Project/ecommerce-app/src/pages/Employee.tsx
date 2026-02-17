interface EmployeeData {
    id: number;
    name: string;
    role: string;
    department: string;
    salary: number | string;
    location: string;
}

interface EmployeeProps {
    emp: EmployeeData;
    deleteEmp: (id: number) => void;
}

function Employee(props: EmployeeProps) {
    const { emp, deleteEmp } = props;

    console.log(deleteEmp);
    return (
        <div className="col-sm-6 col-lg-4 mb-4">
            <div className="card h-100 border shadow-none rounded-3 overflow-hidden">
                <div className="card-header bg-body border-bottom py-3 px-3">
                    <div className="d-flex align-items-center gap-3">
                        <div
                            className="rounded-circle bg-dark bg-opacity-10 d-flex align-items-center justify-content-center fw-semibold text-dark"
                            style={{ width: 44, height: 44, fontSize: '1rem' }}
                            aria-hidden
                        >
                            {emp.name.trim().charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0 flex-grow-1">
                            <h6 className="mb-0 fw-semibold text-dark text-truncate" title={emp.name}>
                                {emp.name}
                            </h6>
                            <span className="badge bg-dark bg-opacity-10 text-dark border-0 mt-1" style={{ fontSize: '0.7rem' }}>
                                {emp.role}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card-body py-3 px-3">
                    <dl className="row g-2 mb-0 small">
                        <dt className="col-5 text-muted fw-normal">ID</dt>
                        <dd className="col-7 mb-0 fw-medium text-dark">{emp.id}</dd>
                        <dt className="col-5 text-muted fw-normal">Department</dt>
                        <dd className="col-7 mb-0 fw-medium text-dark text-truncate" title={emp.department}>{emp.department}</dd>
                        <dt className="col-5 text-muted fw-normal">Salary</dt>
                        <dd className="col-7 mb-0 fw-medium text-dark">{emp.salary}</dd>
                        <dt className="col-5 text-muted fw-normal">Location</dt>
                        <dd className="col-7 mb-0 fw-medium text-dark text-truncate" title={emp.location}>{emp.location}</dd>
                    </dl>
                </div>
                <div className="card-footer bg-body border-top py-2 px-3">
                    <button type="button" className="btn btn-outline-danger btn-sm w-100" onClick={() => deleteEmp(emp.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Employee;
